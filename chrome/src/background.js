// Max Page Size - Background Service Worker

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'PAGE_SIZE_APPLIED') {
    console.log('[MaxPageSize] Applied on:', message.host, 'via', message.method);

    // Update badge to show it worked
    if (sender.tab?.id) {
      chrome.action.setBadgeText({
        tabId: sender.tab.id,
        text: '✓'
      });
      chrome.action.setBadgeBackgroundColor({
        tabId: sender.tab.id,
        color: '#4ade80'
      });

      // Clear badge after 3 seconds
      setTimeout(() => {
        chrome.action.setBadgeText({
          tabId: sender.tab.id,
          text: ''
        });
      }, 3000);
    }

    // Track stats (optional)
    trackApplication(message.host, message.method);
  } else if (message.type === 'LOAD_MORE_CLICKED') {
    console.log('[MaxPageSize] Load more clicked on:', message.host);

    // Update badge to show infinite scroll is working
    if (sender.tab?.id) {
      chrome.action.setBadgeText({
        tabId: sender.tab.id,
        text: '∞'
      });
      chrome.action.setBadgeBackgroundColor({
        tabId: sender.tab.id,
        color: '#667eea'
      });

      // Clear badge after 2 seconds
      setTimeout(() => {
        chrome.action.setBadgeText({
          tabId: sender.tab.id,
          text: ''
        });
      }, 2000);
    }

    // Track stats
    trackApplication(message.host, 'infinite-scroll');
  }

  return true;
});

// Track usage stats locally
async function trackApplication(host, method) {
  try {
    const result = await chrome.storage.local.get(['stats']);
    const stats = result.stats || { total: 0, byMethod: {}, bySite: {} };

    stats.total++;
    stats.byMethod[method] = (stats.byMethod[method] || 0) + 1;
    stats.bySite[host] = (stats.bySite[host] || 0) + 1;
    stats.lastApplied = new Date().toISOString();

    await chrome.storage.local.set({ stats });
  } catch (error) {
    console.error('[MaxPageSize] Failed to track stats:', error);
  }
}

// Initialize default settings on install
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Set default settings
    chrome.storage.sync.set({
      enabled: true,
      enableNewSites: true,
      enabledSites: [],
      disabledSites: [],
      customParams: {},
      infiniteScroll: false
    });

    console.log('[MaxPageSize] Extension installed, defaults set');
  }
});

// Handle tab updates to update badge state
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading') {
    // Clear badge when page starts loading
    chrome.action.setBadgeText({ tabId, text: '' });
  }
});
