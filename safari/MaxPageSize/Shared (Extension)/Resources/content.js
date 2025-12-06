// Max Page Size - Content Script
// Runs on all pages to detect and maximize page size selectors

// Feature flags
const FEATURES = {
  INFINITE_SCROLL: false // Disabled for now
};

// ============================================
// Common page size values for fallback detection
// ============================================
const COMMON_PAGE_SIZES = [10, 12, 15, 16, 20, 24, 25, 30, 32, 36, 40, 48, 50, 60, 64, 72, 75, 80, 96, 100, 120, 150, 200, 250, 500];

// ============================================
// Site configurations for known sites
// ============================================
const SITE_CONFIGS = {
  // === Major Marketplaces ===

  // Amazon (US)
  'amazon.com': {
    selectors: [
      'select[name="s"]',
      '#s-result-sort-select',
      '[data-csa-c-func-deps="aui-da-dropdown"]'
    ],
    strategy: 'select-max-numeric',
    urlPattern: /\/s\?/
  },

  // Amazon (UK)
  'amazon.co.uk': {
    selectors: ['select[name="s"]', '#s-result-sort-select'],
    strategy: 'select-max-numeric',
    urlPattern: /\/s\?/
  },

  // Amazon (Canada)
  'amazon.ca': {
    selectors: ['select[name="s"]', '#s-result-sort-select'],
    strategy: 'select-max-numeric',
    urlPattern: /\/s\?/
  },

  // Amazon (Germany)
  'amazon.de': {
    selectors: ['select[name="s"]', '#s-result-sort-select'],
    strategy: 'select-max-numeric',
    urlPattern: /\/s\?/
  },

  // Amazon (France)
  'amazon.fr': {
    selectors: ['select[name="s"]', '#s-result-sort-select'],
    strategy: 'select-max-numeric',
    urlPattern: /\/s\?/
  },

  // Amazon (Japan)
  'amazon.co.jp': {
    selectors: ['select[name="s"]', '#s-result-sort-select'],
    strategy: 'select-max-numeric',
    urlPattern: /\/s\?/
  },

  // eBay
  'ebay.com': {
    selectors: [
      'select.srp-view-options__select--items-per-page',
      '[aria-label="Items per page"]',
      '.x-results-options select'
    ],
    strategy: 'select-max-numeric'
  },

  // Etsy
  'etsy.com': {
    selectors: ['select[name="count"]'],
    strategy: 'select-max-numeric'
  },

  // AliExpress
  'aliexpress.com': {
    selectors: [
      'select.product-pagination-select',
      '[data-role="pagesize-select"]'
    ],
    strategy: 'select-max-numeric'
  },

  // === Major US Retailers ===

  // Walmart
  'walmart.com': {
    selectors: [
      '[data-automation-id="item-count-dropdown"]',
      'select[aria-label*="per page"]'
    ],
    strategy: 'select-max-numeric'
  },

  // Target
  'target.com': {
    selectors: [
      '[data-test="pagination-count-selector"]',
      'select[aria-label*="per page"]'
    ],
    strategy: 'select-max-numeric'
  },

  // Best Buy
  'bestbuy.com': {
    selectors: [
      'select[id*="page-size"]',
      '.page-size-dropdown select'
    ],
    strategy: 'select-max-numeric'
  },

  // Costco
  'costco.com': {
    selectors: [
      'select[name="pageSize"]',
      'select.items-per-page'
    ],
    strategy: 'select-max-numeric'
  },

  // Home Depot
  'homedepot.com': {
    selectors: [
      'select[data-testid="pagination-dropdown"]',
      '.results-per-page select'
    ],
    strategy: 'select-max-numeric'
  },

  // Lowe's
  'lowes.com': {
    selectors: [
      'select[data-selector="pagination-size"]',
      '.results-pagination select'
    ],
    strategy: 'select-max-numeric'
  },

  // Macy's
  'macys.com': {
    selectors: [
      'select[data-auto="pagination-dropdown"]',
      '.pagination-controls select'
    ],
    strategy: 'select-max-numeric'
  },

  // Nordstrom
  'nordstrom.com': {
    selectors: [
      'select[name="page-size"]',
      '[data-testid="page-size-select"]'
    ],
    strategy: 'select-max-numeric'
  },

  // Kohl's
  'kohls.com': {
    selectors: [
      'select.items-per-page',
      '[data-automation="items-per-page"]'
    ],
    strategy: 'select-max-numeric'
  },

  // JCPenney
  'jcpenney.com': {
    selectors: [
      'select.page-size-select',
      '[data-automation-id="page-size"]'
    ],
    strategy: 'select-max-numeric'
  },

  // Wayfair
  'wayfair.com': {
    selectors: [
      'select[data-enzyme-id="Pagination-ItemsPerPage"]',
      '.Pagination-itemsPerPage select'
    ],
    strategy: 'select-max-numeric'
  },

  // Overstock
  'overstock.com': {
    selectors: [
      'select[name="resultsPerPage"]',
      '.pagination-control select'
    ],
    strategy: 'select-max-numeric'
  },

  // Bed Bath & Beyond / Overstock
  'bedbathandbeyond.com': {
    selectors: [
      'select[data-testid="per-page-selector"]',
      '.results-per-page select'
    ],
    strategy: 'select-max-numeric'
  },

  // === Electronics ===

  // Newegg
  'newegg.com': {
    selectors: [
      'select.items-view-select',
      '[title="Show Items"] select'
    ],
    strategy: 'select-max-numeric'
  },

  // B&H Photo
  'bhphotovideo.com': {
    selectors: [
      'select[data-selenium="perPage"]',
      '.per-page-select'
    ],
    strategy: 'select-max-numeric'
  },

  // Micro Center
  'microcenter.com': {
    selectors: [
      'select#resultsPerPage',
      '.pagination-results select'
    ],
    strategy: 'select-max-numeric'
  },

  // === Fashion ===

  // ASOS
  'asos.com': {
    selectors: [
      'select[data-auto-id="pageSize"]',
      '.pagination-select'
    ],
    strategy: 'select-max-numeric'
  },

  // Zappos
  'zappos.com': {
    selectors: [
      'select[name="si"]',
      '[data-slot-id="pagination"] select'
    ],
    strategy: 'select-max-numeric'
  },

  // Nike
  'nike.com': {
    selectors: [
      'select[data-testid="products-per-page"]',
      '.products-per-page select'
    ],
    strategy: 'select-max-numeric'
  },

  // Adidas
  'adidas.com': {
    selectors: [
      'select[name="pageSize"]',
      '.plp-pagination select'
    ],
    strategy: 'select-max-numeric'
  },

  // === Grocery ===

  // Instacart
  'instacart.com': {
    selectors: [
      'select[data-testid="items-per-page"]',
      '.pagination-selector select'
    ],
    strategy: 'select-max-numeric'
  },

  // === Search Engines ===

  // Bing
  'bing.com': {
    strategy: 'url-param',
    param: 'count',
    maxValue: '50',
    urlPattern: /\/search\?/
  },

  // DuckDuckGo
  'duckduckgo.com': {
    strategy: 'url-param',
    param: 'kp',
    maxValue: '-2',
    urlPattern: /\//
  },

  // Yahoo Search
  'search.yahoo.com': {
    strategy: 'url-param',
    param: 'n',
    maxValue: '100',
    urlPattern: /\/search/
  },

  // Yandex
  'yandex.com': {
    strategy: 'url-param',
    param: 'numdoc',
    maxValue: '50',
    urlPattern: /\/search/
  },

  // === Developer/Tech ===

  // GitHub
  'github.com': {
    selectors: [
      'select[name="per_page"]',
      '.select-menu-list [data-menu-button]'
    ],
    strategy: 'select-max-numeric'
  },

  // Stack Overflow
  'stackoverflow.com': {
    selectors: ['select#pagesize'],
    strategy: 'select-max-numeric'
  },

  // npm
  'npmjs.com': {
    selectors: ['select[name="perPage"]'],
    strategy: 'select-max-numeric'
  },

  // PyPI
  'pypi.org': {
    selectors: ['select[name="per_page"]'],
    strategy: 'select-max-numeric'
  },

  // === International Retailers ===

  // IKEA
  'ikea.com': {
    selectors: [
      'select[data-testid="plp-pagination-select"]',
      '.plp-pagination select'
    ],
    strategy: 'select-max-numeric'
  },

  // Zalando (Europe)
  'zalando.com': {
    selectors: [
      'select[data-testid="page-size"]',
      '.z-pagination select'
    ],
    strategy: 'select-max-numeric'
  },

  // SHEIN
  'shein.com': {
    selectors: [
      'select.page-size-select',
      '[data-pagination="size"] select'
    ],
    strategy: 'select-max-numeric'
  },

  // Temu
  'temu.com': {
    selectors: [
      'select[data-testid="page-size"]',
      '.pagination-size select'
    ],
    strategy: 'select-max-numeric'
  }
};

// ============================================
// Keywords that suggest a select is for page size
// ============================================
const PAGE_SIZE_KEYWORDS = [
  'per page', 'per_page', 'perpage', 'pagesize', 'page-size', 'page_size',
  'items', 'results', 'show', 'display', 'view', 'count', 'limit', 'rows'
];

// ============================================
// Keywords that suggest a button is for loading more content
// ============================================
const LOAD_MORE_KEYWORDS = [
  'load more', 'show more', 'view more', 'see more', 'more results',
  'load additional', 'show all', 'view all', 'see all', 'display more',
  'next page', 'continue', 'expand', 'more items', 'more products',
  'load next', 'show next', 'fetch more', 'get more', 'view more products',
  'show more products', 'load more products', 'see more products'
];

// Helper to get storage (Safari uses local, not sync)
function getStorage(keys) {
  return new Promise((resolve) => {
    try {
      browser.storage.local.get(keys).then(resolve).catch(() => resolve({}));
    } catch (e) {
      resolve({});
    }
  });
}

class MaxPageSize {
  constructor() {
    this.applied = false;
    this.currentHost = window.location.hostname;
    this.infiniteScrollEnabled = false;
    this.infiniteScrollObserver = null;
    this.isLoadingMore = false;
    this.loadMoreCooldown = false;
    console.log('[MaxPageSize] Initialized for host:', this.currentHost);
  }

  async init() {
    console.log('[MaxPageSize] Starting init...');

    // Check if extension is disabled for this site
    const isDisabled = await this.isDisabledForSite();
    if (isDisabled) {
      console.log('[MaxPageSize] Disabled for this site');
      return;
    }

    // Check if globally enabled
    const isEnabled = await this.isEnabled();
    if (!isEnabled) {
      console.log('[MaxPageSize] Extension is globally disabled');
      return;
    }

    console.log('[MaxPageSize] Extension is enabled, trying to apply...');

    // Try to apply max page size
    await this.tryApply();

    // Also watch for dynamic content changes (SPAs)
    this.observeDOM();

    // Initialize infinite scroll if enabled (feature flagged)
    if (FEATURES.INFINITE_SCROLL) {
      await this.initInfiniteScroll();
    }
  }

  async isEnabled() {
    const result = await getStorage(['enabled']);
    // Default to enabled if not set
    return result.enabled !== false;
  }

  async isDisabledForSite() {
    const result = await getStorage(['enableNewSites', 'enabledSites', 'disabledSites']);
    const enableNewSites = result.enableNewSites !== false;
    const enabledSites = result.enabledSites || [];
    const disabledSites = result.disabledSites || [];

    const isEnabled = enabledSites.some(site =>
      this.currentHost.includes(site) || site.includes(this.currentHost)
    );
    const isDisabled = disabledSites.some(site =>
      this.currentHost.includes(site) || site.includes(this.currentHost)
    );

    // Site is enabled if: explicitly enabled OR (not disabled AND enableNewSites)
    const siteEnabled = isEnabled || (!isDisabled && enableNewSites);
    return !siteEnabled;
  }

  async tryApply() {
    if (this.applied) return;

    // First, check for user-configured custom params
    const customConfig = await this.getCustomParamForHost();
    if (customConfig) {
      console.log('[MaxPageSize] Found custom param config for site:', this.currentHost);
      const success = this.applyUrlParam(customConfig.param, customConfig.value);
      if (success) {
        this.applied = true;
        this.notifyApplied('custom');
        return;
      }
    }

    // Next, try known site config
    const config = this.getConfigForHost();
    if (config) {
      console.log('[MaxPageSize] Found config for site:', this.currentHost);

      // Check URL pattern if specified
      if (config.urlPattern && !config.urlPattern.test(window.location.href)) {
        console.log('[MaxPageSize] URL does not match pattern, skipping');
        return;
      }

      const success = this.applyConfig(config);
      if (success) {
        this.applied = true;
        this.notifyApplied('known');
        return;
      }
    }

    // Fallback: try smart detection
    console.log('[MaxPageSize] Trying smart detection...');
    const success = this.smartDetect();
    if (success) {
      this.applied = true;
      this.notifyApplied('detected');
    }
  }

  async getCustomParamForHost() {
    const result = await getStorage(['customParams']);
    const customParams = result.customParams || {};
    for (const [domain, config] of Object.entries(customParams)) {
      if (this.currentHost.includes(domain) || domain.includes(this.currentHost)) {
        return config;
      }
    }
    return null;
  }

  getConfigForHost() {
    const host = this.currentHost;
    for (const [domain, config] of Object.entries(SITE_CONFIGS)) {
      if (host.includes(domain) || domain.includes(host.replace('www.', ''))) {
        return config;
      }
    }
    return null;
  }

  applyConfig(config) {
    switch (config.strategy) {
      case 'select-max-numeric':
        return this.applySelectMaxNumeric(config.selectors);
      case 'url-param':
        return this.applyUrlParam(config.param, config.maxValue);
      default:
        console.warn('[MaxPageSize] Unknown strategy:', config.strategy);
        return false;
    }
  }

  applySelectMaxNumeric(selectors) {
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element && element.tagName === 'SELECT') {
        return this.selectMaxOption(element);
      }
    }
    return false;
  }

  selectMaxOption(selectElement) {
    const options = Array.from(selectElement.options);

    // Find numeric values in options
    const numericOptions = options
      .map((opt, index) => {
        const value = parseInt(opt.value) || parseInt(opt.textContent);
        return { option: opt, value, index };
      })
      .filter(item => !isNaN(item.value) && item.value > 0);

    if (numericOptions.length === 0) return false;

    // Find the max value
    const maxOption = numericOptions.reduce((max, current) =>
      current.value > max.value ? current : max
    );

    // Check if already at max
    if (selectElement.selectedIndex === maxOption.index) {
      console.log('[MaxPageSize] Already at max value:', maxOption.value);
      return true;
    }

    // Select the max option
    selectElement.value = maxOption.option.value;
    selectElement.selectedIndex = maxOption.index;

    // Dispatch events to trigger any listeners
    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    selectElement.dispatchEvent(new Event('input', { bubbles: true }));

    console.log('[MaxPageSize] Set to max value:', maxOption.value);
    return true;
  }

  applyUrlParam(param, maxValue) {
    const url = new URL(window.location.href);
    const currentValue = url.searchParams.get(param);

    if (currentValue === maxValue) {
      console.log('[MaxPageSize] URL param already at max:', param, maxValue);
      return true;
    }

    url.searchParams.set(param, maxValue);
    window.location.href = url.toString();
    return true;
  }

  smartDetect() {
    // Find all select elements on the page
    const selects = document.querySelectorAll('select');

    for (const select of selects) {
      if (this.looksLikePageSizeSelector(select)) {
        console.log('[MaxPageSize] Smart detected selector:', select);
        return this.selectMaxOption(select);
      }
    }

    return false;
  }

  looksLikePageSizeSelector(select) {
    // Get all text associated with the select
    const selectText = [
      select.getAttribute('name') || '',
      select.getAttribute('id') || '',
      select.getAttribute('aria-label') || '',
      select.getAttribute('title') || '',
      select.className || ''
    ].join(' ').toLowerCase();

    // Check label if exists
    let labelText = '';
    if (select.id) {
      const label = document.querySelector(`label[for="${select.id}"]`);
      if (label) labelText = label.textContent.toLowerCase();
    }

    // Check parent text
    const parent = select.closest('div, span, label, form');
    const parentText = parent ? parent.textContent.toLowerCase().slice(0, 100) : '';

    const allText = `${selectText} ${labelText} ${parentText}`;

    // Check for keywords
    const hasKeyword = PAGE_SIZE_KEYWORDS.some(keyword => allText.includes(keyword));
    if (!hasKeyword) return false;

    // Check if options look like page sizes
    const options = Array.from(select.options);
    const values = options
      .map(opt => parseInt(opt.value) || parseInt(opt.textContent))
      .filter(v => !isNaN(v) && v > 0);

    if (values.length < 2) return false;

    // Check if values are common page sizes or multiples
    const matchesCommonSizes = values.some(v => COMMON_PAGE_SIZES.includes(v));

    // Check if values form a reasonable progression (like 10, 25, 50, 100)
    const sorted = [...values].sort((a, b) => a - b);
    const hasReasonableProgression = sorted.every((v, i) => {
      if (i === 0) return v >= 5 && v <= 50;
      return v > sorted[i - 1] && v <= 1000;
    });

    return matchesCommonSizes || hasReasonableProgression;
  }

  observeDOM() {
    // Watch for dynamic content changes
    const observer = new MutationObserver((mutations) => {
      if (this.applied) return;

      // Debounce checks
      clearTimeout(this.observerTimeout);
      this.observerTimeout = setTimeout(() => {
        this.tryApply();
      }, 500);
    });

    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    // Also try again after a delay for slow-loading content
    setTimeout(() => this.tryApply(), 2000);
    setTimeout(() => this.tryApply(), 5000);
  }

  notifyApplied(method) {
    // Send message to background script
    try {
      browser.runtime.sendMessage({
        type: 'PAGE_SIZE_APPLIED',
        method,
        host: this.currentHost,
        url: window.location.href
      });
    } catch (e) {
      console.log('[MaxPageSize] Could not notify background:', e);
    }
  }

  // ============================================
  // Infinite Scroll Feature
  // ============================================

  async initInfiniteScroll() {
    // Check if extension is disabled for this site
    const isDisabled = await this.isDisabledForSite();
    if (isDisabled) {
      console.log('[MaxPageSize] Infinite scroll disabled - site is disabled');
      return;
    }

    // Check if globally enabled
    const isEnabled = await this.isEnabled();
    if (!isEnabled) {
      console.log('[MaxPageSize] Infinite scroll disabled - extension is globally disabled');
      return;
    }

    const result = await getStorage(['infiniteScroll']);
    this.infiniteScrollEnabled = result.infiniteScroll === true;

    if (this.infiniteScrollEnabled) {
      this.startInfiniteScroll();
    }
  }

  startInfiniteScroll() {
    if (this.infiniteScrollObserver) return;

    console.log('[MaxPageSize] Starting infinite scroll');

    // Use Intersection Observer to detect when user scrolls near bottom
    this.infiniteScrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.isLoadingMore && !this.loadMoreCooldown) {
            this.tryClickLoadMore();
          }
        });
      },
      {
        root: null,
        rootMargin: '500px', // Trigger 500px before reaching the element
        threshold: 0
      }
    );

    // Find and observe load more buttons
    this.observeLoadMoreButtons();

    // Also listen for scroll events as a fallback
    this.scrollHandler = this.debounce(() => {
      if (this.isNearBottom() && !this.isLoadingMore && !this.loadMoreCooldown) {
        this.tryClickLoadMore();
      }
    }, 200);

    window.addEventListener('scroll', this.scrollHandler, { passive: true });

    // Watch for new load more buttons being added to the DOM
    this.loadMoreMutationObserver = new MutationObserver(
      this.debounce(() => {
        this.observeLoadMoreButtons();
      }, 500)
    );

    if (document.body) {
      this.loadMoreMutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  stopInfiniteScroll() {
    console.log('[MaxPageSize] Stopping infinite scroll');

    if (this.infiniteScrollObserver) {
      this.infiniteScrollObserver.disconnect();
      this.infiniteScrollObserver = null;
    }

    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
      this.scrollHandler = null;
    }

    if (this.loadMoreMutationObserver) {
      this.loadMoreMutationObserver.disconnect();
      this.loadMoreMutationObserver = null;
    }
  }

  observeLoadMoreButtons() {
    const buttons = this.findLoadMoreButtons();

    buttons.forEach((button) => {
      if (!button.dataset.maxPageSizeObserved) {
        button.dataset.maxPageSizeObserved = 'true';
        this.infiniteScrollObserver?.observe(button);
      }
    });
  }

  findLoadMoreButtons() {
    const candidates = [];

    // Find buttons and links
    const elements = document.querySelectorAll('button, a, [role="button"], input[type="button"], input[type="submit"]');

    for (const element of elements) {
      if (this.looksLikeLoadMoreButton(element)) {
        candidates.push(element);
      }
    }

    return candidates;
  }

  looksLikeLoadMoreButton(element) {
    // Skip disabled elements
    if (element.disabled || element.getAttribute('aria-disabled') === 'true') return false;

    // Get text content - normalize whitespace
    const text = (element.textContent || '').toLowerCase().replace(/\s+/g, ' ').trim();
    const ariaLabel = (element.getAttribute('aria-label') || '').toLowerCase();
    const title = (element.getAttribute('title') || '').toLowerCase();
    const className = (typeof element.className === 'string' ? element.className : '').toLowerCase();
    const id = (element.id || '').toLowerCase();
    const href = (element.getAttribute('href') || '').toLowerCase();

    const allText = `${text} ${ariaLabel} ${title} ${className} ${id} ${href}`;

    // Check for load more keywords
    const hasLoadMoreKeyword = LOAD_MORE_KEYWORDS.some(keyword => allText.includes(keyword));

    if (!hasLoadMoreKeyword) return false;

    // Exclude pagination links (numbered pages only)
    if (/^\d+$/.test(text.trim())) return false;

    // Exclude "previous" buttons
    if (allText.includes('previous') || allText.includes('prev ') || allText.includes(' back')) return false;

    // Exclude header/footer navigation links
    const inHeaderOrFooter = element.closest('header, footer, nav:not([class*="product"]):not([class*="pagination"])');
    if (inHeaderOrFooter && !allText.includes('product')) return false;

    return true;
  }

  async tryClickLoadMore() {
    if (this.isLoadingMore || this.loadMoreCooldown) return;

    const buttons = this.findLoadMoreButtons();
    const visibleButton = buttons.find((btn) => this.isElementVisible(btn));

    if (!visibleButton) return;

    console.log('[MaxPageSize] Clicking load more button:', visibleButton);

    this.isLoadingMore = true;

    try {
      // Click the button
      visibleButton.click();

      // Also dispatch events in case click() doesn't work
      visibleButton.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));

      // Set a cooldown to avoid rapid clicking
      this.loadMoreCooldown = true;
      setTimeout(() => {
        this.loadMoreCooldown = false;
      }, 1500);

      // Notify background
      try {
        browser.runtime.sendMessage({
          type: 'LOAD_MORE_CLICKED',
          host: this.currentHost
        });
      } catch (e) {
        console.log('[MaxPageSize] Could not notify background:', e);
      }

    } catch (error) {
      console.error('[MaxPageSize] Error clicking load more:', error);
    } finally {
      // Reset loading state after a delay
      setTimeout(() => {
        this.isLoadingMore = false;
        // Re-observe buttons after content might have changed
        this.observeLoadMoreButtons();
      }, 1000);
    }
  }

  isElementVisible(element) {
    // Check if element is displayed
    const style = window.getComputedStyle(element);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
      return false;
    }

    const rect = element.getBoundingClientRect();

    // Element must have some size
    if (rect.width === 0 || rect.height === 0) return false;

    // Check if element is in or near the viewport (within 800px below)
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top < viewportHeight + 800 &&
      rect.bottom > -100 &&
      rect.left < viewportWidth &&
      rect.right > 0
    );
  }

  isNearBottom() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    return scrollTop + clientHeight >= scrollHeight - 800;
  }

  debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  setInfiniteScrollEnabled(enabled) {
    this.infiniteScrollEnabled = enabled;
    if (enabled) {
      this.startInfiniteScroll();
    } else {
      this.stopInfiniteScroll();
    }
  }
}

// Listen for messages from popup
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'RETRY_DETECTION') {
    console.log('[MaxPageSize] Retry requested from popup');

    // Gather debug info
    const debugInfo = {
      success: true,
      host: window.location.hostname,
      url: window.location.href,
      hasInstance: !!window.maxPageSizeInstance,
      appliedBefore: window.maxPageSizeInstance?.applied || false,
      selectElements: document.querySelectorAll('select').length,
      siteConfigsLoaded: typeof SITE_CONFIGS !== 'undefined',
      commonPageSizesLoaded: typeof COMMON_PAGE_SIZES !== 'undefined'
    };

    // Check for matching site config
    if (typeof SITE_CONFIGS !== 'undefined') {
      for (const [domain, config] of Object.entries(SITE_CONFIGS)) {
        if (debugInfo.host.includes(domain) || domain.includes(debugInfo.host.replace('www.', ''))) {
          debugInfo.matchedConfig = { domain, strategy: config.strategy };
          if (config.selectors) {
            debugInfo.matchedConfig.selectors = config.selectors;
            // Check which selectors exist
            debugInfo.matchedConfig.foundSelectors = config.selectors.filter(sel => document.querySelector(sel) !== null);
          }
          break;
        }
      }
    }

    // Reset and try again
    if (window.maxPageSizeInstance) {
      window.maxPageSizeInstance.applied = false;
      window.maxPageSizeInstance.tryApply().then(() => {
        debugInfo.appliedAfter = window.maxPageSizeInstance.applied;
      });
    } else {
      window.maxPageSizeInstance = new MaxPageSize();
      window.maxPageSizeInstance.init().then(() => {
        debugInfo.appliedAfter = window.maxPageSizeInstance.applied;
      });
    }

    debugInfo.appliedAfter = window.maxPageSizeInstance?.applied || false;

    return Promise.resolve(debugInfo);
  } else if (message.type === 'INFINITE_SCROLL_CHANGED' && FEATURES.INFINITE_SCROLL) {
    console.log('[MaxPageSize] Infinite scroll changed:', message.enabled);
    if (window.maxPageSizeInstance) {
      window.maxPageSizeInstance.setInfiniteScrollEnabled(message.enabled);
    }
    return Promise.resolve({ success: true });
  }
  return false;
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.maxPageSizeInstance = new MaxPageSize();
    window.maxPageSizeInstance.init();
  });
} else {
  window.maxPageSizeInstance = new MaxPageSize();
  window.maxPageSizeInstance.init();
}
