// Max Page Size - Popup Script

// Feature flags
const FEATURES = {
  INFINITE_SCROLL: false // Disabled for now
};

const SUPPORT_EMAIL = 'support@parra.io';

class PopupController {
  constructor() {
    this.currentTab = null;
    this.currentHost = null;
    this.init();
  }

  async init() {
    // Get current tab info
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    this.currentTab = tabs[0];

    if (this.currentTab?.url) {
      try {
        const url = new URL(this.currentTab.url);
        this.currentHost = url.hostname;
      } catch (e) {
        this.currentHost = null;
      }
    }

    // Update UI with current site info
    this.updateCurrentSiteUI();

    // Load saved settings
    await this.loadSettings();

    // Set up event listeners
    this.setupEventListeners();

    // Update status
    this.updateStatus();
  }

  updateCurrentSiteUI() {
    const urlElement = document.getElementById('currentUrl');

    if (this.currentHost) {
      urlElement.textContent = this.currentHost;
    } else {
      urlElement.textContent = 'Not a web page';
    }
  }

  async loadSettings() {
    // Safari uses local storage instead of sync
    const result = await browser.storage.local.get(['enabled', 'enableNewSites', 'enabledSites', 'disabledSites', 'customParams', 'infiniteScroll']);

    // Global toggle - default to enabled
    const globalEnabled = result.enabled !== false;
    document.getElementById('globalToggle').checked = globalEnabled;

    // New sites toggle - default to enabled
    const enableNewSites = result.enableNewSites !== false;
    document.getElementById('newSitesToggle').checked = enableNewSites;

    // Infinite scroll toggle - default to disabled (feature flagged)
    if (FEATURES.INFINITE_SCROLL) {
      const infiniteScroll = result.infiniteScroll === true;
      const toggle = document.getElementById('infiniteScrollToggle');
      if (toggle) toggle.checked = infiniteScroll;
    }

    // Show/hide enabled sites section based on enableNewSites
    document.getElementById('enabledSitesSection').style.display = enableNewSites ? 'none' : 'block';

    // Site-specific toggle based on enabled/disabled lists
    const enabledSites = result.enabledSites || [];
    const disabledSites = result.disabledSites || [];

    const isEnabled = enabledSites.some(site =>
      this.currentHost?.includes(site) || site.includes(this.currentHost || '')
    );
    const isDisabled = disabledSites.some(site =>
      this.currentHost?.includes(site) || site.includes(this.currentHost || '')
    );

    // Site is enabled if: explicitly enabled OR (not disabled AND enableNewSites)
    const siteEnabled = isEnabled || (!isDisabled && enableNewSites);

    // Update disable button text based on current state
    this.updateDisableButton(siteEnabled, isDisabled);

    // Load current site's custom param
    this.loadCurrentSiteParam(result.customParams || {});
  }

  updateDisableButton(siteEnabled, isDisabled) {
    const btn = document.getElementById('disableForSiteBtn');

    if (!this.currentHost) {
      btn.disabled = true;
      btn.textContent = 'Disable for this site';
      return;
    }

    btn.disabled = false;
    if (isDisabled) {
      btn.textContent = 'Enable for this site';
    } else {
      btn.textContent = 'Disable for this site';
    }
  }

  loadCurrentSiteParam(customParams) {
    const section = document.getElementById('customParamSection');
    const paramInput = document.getElementById('currentParamName');
    const valueInput = document.getElementById('currentParamValue');
    const removeBtn = document.getElementById('removeCurrentParamBtn');

    if (!this.currentHost) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';

    // Check if there's a custom param for this host
    let existingParam = null;
    this.matchedParamDomain = null;
    for (const [domain, config] of Object.entries(customParams)) {
      if (this.currentHost.includes(domain) || domain.includes(this.currentHost)) {
        existingParam = config;
        this.matchedParamDomain = domain;
        break;
      }
    }

    if (existingParam) {
      paramInput.value = existingParam.param;
      valueInput.value = existingParam.value;
      removeBtn.style.display = 'block';
    } else {
      paramInput.value = '';
      valueInput.value = '';
      removeBtn.style.display = 'none';
    }
  }

  async saveCurrentSiteParam() {
    if (!this.currentHost) return;

    const param = document.getElementById('currentParamName').value.trim();
    const value = document.getElementById('currentParamValue').value.trim();

    if (!param || !value) return;

    const result = await browser.storage.local.get(['customParams']);
    const customParams = result.customParams || {};

    customParams[this.currentHost] = { param, value };

    await browser.storage.local.set({ customParams });

    document.getElementById('removeCurrentParamBtn').style.display = 'block';

    // Reload page to apply
    if (this.currentTab?.id) {
      browser.tabs.reload(this.currentTab.id);
    }
  }

  async removeCurrentSiteParam() {
    if (!this.currentHost) return;

    const result = await browser.storage.local.get(['customParams']);
    const customParams = result.customParams || {};

    // Remove the matched domain (stored from loadCurrentSiteParam)
    if (this.matchedParamDomain) {
      delete customParams[this.matchedParamDomain];
    }

    // Also try to remove by current host just in case
    delete customParams[this.currentHost];

    await browser.storage.local.set({ customParams });

    document.getElementById('currentParamName').value = '';
    document.getElementById('currentParamValue').value = '';
    document.getElementById('removeCurrentParamBtn').style.display = 'none';
    this.matchedParamDomain = null;

    // Reload page to apply
    if (this.currentTab?.id) {
      browser.tabs.reload(this.currentTab.id);
    }
  }

  setupEventListeners() {
    // Disable for site button
    document.getElementById('disableForSiteBtn').addEventListener('click', () => {
      this.toggleSiteEnabled();
    });

    // Settings button
    document.getElementById('settingsBtn').addEventListener('click', () => {
      this.showSettings();
    });

    // Report button
    document.getElementById('reportBtn').addEventListener('click', () => {
      this.reportSite();
    });

    // Retry button
    document.getElementById('retryBtn').addEventListener('click', () => {
      this.retryDetection();
    });

    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
      this.hideSettings();
    });

    // Global toggle
    document.getElementById('globalToggle').addEventListener('change', (e) => {
      this.setGlobalEnabled(e.target.checked);
    });

    // New sites toggle
    document.getElementById('newSitesToggle').addEventListener('change', (e) => {
      this.setEnableNewSites(e.target.checked);
    });

    // Infinite scroll toggle (feature flagged)
    if (FEATURES.INFINITE_SCROLL) {
      const toggle = document.getElementById('infiniteScrollToggle');
      if (toggle) {
        toggle.addEventListener('change', (e) => {
          this.setInfiniteScroll(e.target.checked);
        });
      }
    }

    // Add enabled site
    document.getElementById('addEnabledSiteBtn').addEventListener('click', () => {
      this.addEnabledSite();
    });

    document.getElementById('enabledSiteInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addEnabledSite();
    });

    document.getElementById('addCurrentEnabledBtn').addEventListener('click', () => {
      this.addCurrentSiteToEnabled();
    });

    // Add disabled site
    document.getElementById('addDisabledSiteBtn').addEventListener('click', () => {
      this.addDisabledSite();
    });

    document.getElementById('disabledSiteInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addDisabledSite();
    });

    document.getElementById('addCurrentDisabledBtn').addEventListener('click', () => {
      this.addCurrentSiteToDisabled();
    });

    // Custom URL params
    document.getElementById('addCustomParamBtn').addEventListener('click', () => {
      this.addCustomParam();
    });

    document.getElementById('addCurrentCustomParamBtn').addEventListener('click', () => {
      this.useCurrentSiteForCustomParam();
    });

    // Current site custom param
    document.getElementById('saveCurrentParamBtn').addEventListener('click', () => {
      this.saveCurrentSiteParam();
    });

    document.getElementById('removeCurrentParamBtn').addEventListener('click', () => {
      this.removeCurrentSiteParam();
    });
  }

  async showSettings() {
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('manageSitesSection').classList.add('show');

    // Disable "Add current site" buttons if no valid host
    document.getElementById('addCurrentEnabledBtn').disabled = !this.currentHost;
    document.getElementById('addCurrentDisabledBtn').disabled = !this.currentHost;
    document.getElementById('addCurrentCustomParamBtn').disabled = !this.currentHost;

    // Render lists
    await this.renderEnabledSites();
    await this.renderDisabledSites();
    await this.renderCustomParams();
  }

  hideSettings() {
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('manageSitesSection').classList.remove('show');
  }

  async toggleSiteEnabled() {
    if (!this.currentHost) return;

    const result = await browser.storage.local.get(['enabledSites', 'disabledSites']);
    let enabledSites = result.enabledSites || [];
    let disabledSites = result.disabledSites || [];

    const isDisabled = disabledSites.some(site =>
      this.currentHost.includes(site) || site.includes(this.currentHost)
    );

    if (isDisabled) {
      // Remove from disabled list
      disabledSites = disabledSites.filter(site => site !== this.currentHost);
    } else {
      // Add to disabled list, remove from enabled list
      enabledSites = enabledSites.filter(site => site !== this.currentHost);
      if (!disabledSites.includes(this.currentHost)) {
        disabledSites.push(this.currentHost);
      }
    }

    await browser.storage.local.set({ enabledSites, disabledSites });
    await this.loadSettings();
    this.updateStatus();

    // Reload current tab to apply changes
    if (this.currentTab?.id) {
      browser.tabs.reload(this.currentTab.id);
    }
  }

  async setGlobalEnabled(enabled) {
    await browser.storage.local.set({ enabled });
    this.updateStatus();

    // Reload current tab to apply changes
    if (this.currentTab?.id) {
      browser.tabs.reload(this.currentTab.id);
    }
  }

  async setEnableNewSites(enabled) {
    await browser.storage.local.set({ enableNewSites: enabled });

    // Show/hide enabled sites section
    document.getElementById('enabledSitesSection').style.display = enabled ? 'none' : 'block';

    await this.loadSettings();
    this.updateStatus();
  }

  async setInfiniteScroll(enabled) {
    await browser.storage.local.set({ infiniteScroll: enabled });

    // Notify content script of the change
    if (this.currentTab?.id) {
      try {
        await browser.tabs.sendMessage(this.currentTab.id, {
          type: 'INFINITE_SCROLL_CHANGED',
          enabled
        });
      } catch (e) {
        // Content script may not be loaded
      }
    }
  }

  // Enabled sites methods
  async addCurrentSiteToEnabled() {
    if (!this.currentHost) return;
    document.getElementById('enabledSiteInput').value = this.currentHost;
    await this.addEnabledSite();
  }

  async addEnabledSite() {
    const input = document.getElementById('enabledSiteInput');
    const site = input.value.trim().toLowerCase();

    if (!site) return;

    const result = await browser.storage.local.get(['enabledSites', 'disabledSites']);
    let enabledSites = result.enabledSites || [];
    let disabledSites = result.disabledSites || [];

    // Remove from disabled if present
    disabledSites = disabledSites.filter(s => s !== site);

    if (!enabledSites.includes(site)) {
      enabledSites.push(site);
    }

    await browser.storage.local.set({ enabledSites, disabledSites });
    input.value = '';
    await this.renderEnabledSites();
    await this.renderDisabledSites();
    await this.loadSettings();
    this.updateStatus();
  }

  async removeEnabledSite(site) {
    const result = await browser.storage.local.get(['enabledSites']);
    let enabledSites = result.enabledSites || [];
    enabledSites = enabledSites.filter(s => s !== site);
    await browser.storage.local.set({ enabledSites });
    await this.renderEnabledSites();
    await this.loadSettings();
    this.updateStatus();
  }

  async renderEnabledSites() {
    const result = await browser.storage.local.get(['enabledSites']);
    const enabledSites = result.enabledSites || [];

    const container = document.getElementById('enabledSitesList');
    if (enabledSites.length === 0) {
      container.innerHTML = '<div class="empty-list">No enabled sites</div>';
    } else {
      container.innerHTML = enabledSites.map(site => `
        <div class="site-item">
          <span class="site-item-host">${site}</span>
          <button class="site-item-remove" data-site="${site}">&times;</button>
        </div>
      `).join('');
    }

    // Add remove button listeners
    container.querySelectorAll('.site-item-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const site = e.target.dataset.site;
        this.removeEnabledSite(site);
      });
    });
  }

  // Disabled sites methods
  async addCurrentSiteToDisabled() {
    if (!this.currentHost) return;
    document.getElementById('disabledSiteInput').value = this.currentHost;
    await this.addDisabledSite();
  }

  async addDisabledSite() {
    const input = document.getElementById('disabledSiteInput');
    const site = input.value.trim().toLowerCase();

    if (!site) return;

    const result = await browser.storage.local.get(['enabledSites', 'disabledSites']);
    let enabledSites = result.enabledSites || [];
    let disabledSites = result.disabledSites || [];

    // Remove from enabled if present
    enabledSites = enabledSites.filter(s => s !== site);

    if (!disabledSites.includes(site)) {
      disabledSites.push(site);
    }

    await browser.storage.local.set({ enabledSites, disabledSites });
    input.value = '';
    await this.renderEnabledSites();
    await this.renderDisabledSites();
    await this.loadSettings();
    this.updateStatus();
  }

  async removeDisabledSite(site) {
    const result = await browser.storage.local.get(['disabledSites']);
    let disabledSites = result.disabledSites || [];
    disabledSites = disabledSites.filter(s => s !== site);
    await browser.storage.local.set({ disabledSites });
    await this.renderDisabledSites();
    await this.loadSettings();
    this.updateStatus();
  }

  async renderDisabledSites() {
    const result = await browser.storage.local.get(['disabledSites']);
    const disabledSites = result.disabledSites || [];

    const container = document.getElementById('disabledSitesList');
    if (disabledSites.length === 0) {
      container.innerHTML = '<div class="empty-list">No disabled sites</div>';
    } else {
      container.innerHTML = disabledSites.map(site => `
        <div class="site-item">
          <span class="site-item-host">${site}</span>
          <button class="site-item-remove" data-site="${site}">&times;</button>
        </div>
      `).join('');
    }

    // Add remove button listeners
    container.querySelectorAll('.site-item-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const site = e.target.dataset.site;
        this.removeDisabledSite(site);
      });
    });
  }

  // Custom params methods
  useCurrentSiteForCustomParam() {
    if (!this.currentHost) return;
    document.getElementById('customParamDomain').value = this.currentHost;
  }

  async addCustomParam() {
    const domain = document.getElementById('customParamDomain').value.trim().toLowerCase();
    const param = document.getElementById('customParamName').value.trim();
    const value = document.getElementById('customParamValue').value.trim();

    if (!domain || !param || !value) return;

    const result = await browser.storage.local.get(['customParams']);
    const customParams = result.customParams || {};

    customParams[domain] = { param, value };

    await browser.storage.local.set({ customParams });

    // Clear inputs
    document.getElementById('customParamDomain').value = '';
    document.getElementById('customParamName').value = '';
    document.getElementById('customParamValue').value = '';

    await this.renderCustomParams();
  }

  async removeCustomParam(domain) {
    const result = await browser.storage.local.get(['customParams']);
    const customParams = result.customParams || {};

    delete customParams[domain];

    await browser.storage.local.set({ customParams });
    await this.renderCustomParams();
  }

  async renderCustomParams() {
    const result = await browser.storage.local.get(['customParams']);
    const customParams = result.customParams || {};

    const container = document.getElementById('customParamsList');
    const entries = Object.entries(customParams);

    if (entries.length === 0) {
      container.innerHTML = '<div class="empty-list">No custom parameters</div>';
    } else {
      container.innerHTML = entries.map(([domain, config]) => `
        <div class="site-item">
          <div>
            <span class="site-item-host">${domain}</span>
            <div class="site-item-details">&${config.param}=${config.value}</div>
          </div>
          <button class="site-item-remove" data-domain="${domain}">&times;</button>
        </div>
      `).join('');
    }

    // Add remove button listeners
    container.querySelectorAll('.site-item-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const domain = e.target.dataset.domain;
        this.removeCustomParam(domain);
      });
    });
  }

  updateStatus() {
    const globalEnabled = document.getElementById('globalToggle').checked;
    const btn = document.getElementById('disableForSiteBtn');
    const isDisabled = btn.textContent === 'Enable for this site';
    const siteEnabled = !isDisabled;

    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');

    if (!globalEnabled) {
      statusDot.className = 'status-dot inactive';
      statusText.textContent = 'Disabled';
      btn.disabled = true;
    } else {
      btn.disabled = !this.currentHost;

      if (!siteEnabled) {
        statusDot.className = 'status-dot disabled';
        statusText.textContent = 'Disabled for this site';
      } else {
        statusDot.className = 'status-dot';
        statusText.textContent = 'Active';
      }
    }
  }

  reportSite() {
    if (!this.currentHost || !this.currentTab?.url) {
      return;
    }

    const subject = encodeURIComponent(`Max Page Size - Site Report: ${this.currentHost}`);
    const body = encodeURIComponent(
      `I'd like to report a site for Max Page Size support:\n\n` +
      `Host: ${this.currentHost}\n` +
      `URL: ${this.currentTab.url}\n` +
      `Reported: ${new Date().toISOString()}\n\n` +
      `Additional notes:\n`
    );

    const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    browser.tabs.create({ url: mailtoUrl });
  }

  async retryDetection() {
    const retryBtn = document.getElementById('retryBtn');
    const errorDiv = document.getElementById('retryError');

    // Clear previous error
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';

    if (!this.currentTab?.id) {
      errorDiv.textContent = 'Error: No active tab found. Tab ID: ' + (this.currentTab?.id || 'undefined');
      errorDiv.style.display = 'block';
      return;
    }

    if (!this.currentTab?.url) {
      errorDiv.textContent = 'Error: No URL for current tab. URL: ' + (this.currentTab?.url || 'undefined');
      errorDiv.style.display = 'block';
      return;
    }

    // Check if it's a valid URL we can inject into
    if (this.currentTab.url.startsWith('about:') ||
        this.currentTab.url.startsWith('safari-extension:') ||
        this.currentTab.url.startsWith('safari:')) {
      errorDiv.textContent = 'Error: Cannot run on this page type. URL: ' + this.currentTab.url;
      errorDiv.style.display = 'block';
      return;
    }

    retryBtn.disabled = true;
    retryBtn.textContent = 'Retrying...';

    // Send message to content script to retry
    try {
      const response = await browser.tabs.sendMessage(this.currentTab.id, { type: 'RETRY_DETECTION' });

      // Format debug info nicely
      let debugText = 'Debug Info:\n';
      debugText += `Host: ${response.host}\n`;
      debugText += `Select elements found: ${response.selectElements}\n`;
      debugText += `Site configs loaded: ${response.siteConfigsLoaded}\n`;
      debugText += `Common page sizes loaded: ${response.commonPageSizesLoaded}\n`;
      debugText += `Applied before retry: ${response.appliedBefore}\n`;
      debugText += `Applied after retry: ${response.appliedAfter}\n`;

      if (response.matchedConfig) {
        debugText += `\nMatched config for: ${response.matchedConfig.domain}\n`;
        debugText += `Strategy: ${response.matchedConfig.strategy}\n`;
        if (response.matchedConfig.selectors) {
          debugText += `Selectors: ${response.matchedConfig.selectors.join(', ')}\n`;
          debugText += `Found selectors: ${response.matchedConfig.foundSelectors?.length ? response.matchedConfig.foundSelectors.join(', ') : 'NONE'}\n`;
        }
      } else {
        debugText += `\nNo matching site config found. Using smart detection.\n`;
      }

      errorDiv.textContent = debugText;
      errorDiv.style.display = 'block';
      errorDiv.style.whiteSpace = 'pre-wrap';

      if (response.appliedAfter) {
        errorDiv.style.background = '#d1fae5';
        errorDiv.style.color = '#065f46';
      } else {
        errorDiv.style.background = '#fef3cd';
        errorDiv.style.color = '#856404';
      }
    } catch (error) {
      console.error('Failed to send retry message:', error);
      errorDiv.textContent = 'Error: ' + (error.message || String(error)) + '\n\nThis usually means the content script is not loaded on this page. Try refreshing the page first, or check that the extension has permission to access this site.';
      errorDiv.style.display = 'block';
      errorDiv.style.background = '#fef2f2';
      errorDiv.style.color = '#dc2626';
    }

    // Reset button
    setTimeout(() => {
      retryBtn.disabled = false;
      retryBtn.textContent = 'Retry Detection';
    }, 1000);
  }
}

// Initialize popup
document.addEventListener('DOMContentLoaded', () => {
  new PopupController();
});
