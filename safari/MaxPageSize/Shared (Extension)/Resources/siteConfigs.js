// Hardcoded site configurations for known sites
// Each config specifies how to find and set the max page size

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
