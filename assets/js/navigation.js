/**
 * Enhanced Navigation & Search JavaScript
 * Phase 2: Interactive Components
 */

class NavigationManager {
  constructor() {
    this.isSearchActive = false;
    this.searchResults = [];
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupSearch();
    this.setupCategoryFilter();
    this.setupScrollEffects();
    this.loadSearchIndex();
  }

  // Mobile Menu Management
  setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.mobile-nav-close');

    if (!toggle || !overlay) return;

    toggle.addEventListener('click', () => this.toggleMobileMenu());
    closeBtn?.addEventListener('click', () => this.closeMobileMenu());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.closeMobileMenu();
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !overlay.hidden) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.mobile-nav-overlay');
    
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    
    toggle.setAttribute('aria-expanded', !isOpen);
    
    if (isOpen) {
      overlay.classList.remove('active');
      setTimeout(() => overlay.hidden = true, 300);
      document.body.style.overflow = '';
    } else {
      overlay.hidden = false;
      setTimeout(() => overlay.classList.add('active'), 10);
      document.body.style.overflow = 'hidden';
    }
  }

  closeMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.mobile-nav-overlay');
    
    toggle.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
    setTimeout(() => overlay.hidden = true, 300);
    document.body.style.overflow = '';
  }

  // Search Functionality
  setupSearch() {
    const searchInput = document.querySelector('#search-input');
    const searchResults = document.querySelector('#search-results');
    const mobileSearchInput = document.querySelector('.mobile-search-input');

    if (!searchInput || !searchResults) return;

    // Desktop search
    searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    searchInput.addEventListener('focus', () => this.showSearchResults());
    searchInput.addEventListener('blur', () => {
      // Delay hiding to allow clicking on results
      setTimeout(() => this.hideSearchResults(), 200);
    });

    // Mobile search
    if (mobileSearchInput) {
      mobileSearchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    // Close search on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isSearchActive) {
        this.hideSearchResults();
        searchInput.blur();
      }
    });
  }

  async loadSearchIndex() {
    try {
      // In a real implementation, this would load from a JSON file
      // For now, we'll create a mock search index from page content
      this.searchIndex = await this.createSearchIndex();
    } catch (error) {
      console.warn('Search index could not be loaded:', error);
      this.searchIndex = [];
    }
  }

  async createSearchIndex() {
    // Mock search index - in production this would come from Jekyll
    return [
      {
        title: "Getting Started with GitHub Copilot for DevOps",
        url: "/2025/06/04/github-copilot-devops-lab/",
        excerpt: "Learn how to leverage GitHub Copilot to supercharge your DevOps workflow with AI-powered coding assistance...",
        category: "tech",
        date: "2025-06-04",
        tags: ["github", "copilot", "devops", "ai"]
      },
      {
        title: "Choosing the Right Cybersecurity Career Path",
        url: "/2024/08/10/cyberpath/",
        excerpt: "Are you interested in pursuing a career in cybersecurity, but not sure which path to take? Here's my advice...",
        category: "career",
        date: "2024-08-10",
        tags: ["cybersecurity", "career", "advice"]
      },
      {
        title: "Don't Wait. Contribute Now.",
        url: "/2021/06/03/dont-wait-contribute/",
        excerpt: "There are two types of people—those who find problems and those who bring solutions. Here's how to be the latter...",
        category: "business",
        date: "2021-06-03",
        tags: ["leadership", "contribution", "mindset"]
      }
    ];
  }

  handleSearch(query) {
    const resultsContainer = document.querySelector('.search-results-content');
    if (!resultsContainer) return;

    if (query.length < 2) {
      this.hideSearchResults();
      return;
    }

    const results = this.searchIndex.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    this.displaySearchResults(results, query);
    this.showSearchResults();
  }

  displaySearchResults(results, query) {
    const resultsContainer = document.querySelector('.search-results-content');
    
    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          <p>No posts found for "${query}"</p>
        </div>
      `;
      return;
    }

    const resultsHTML = results.map(post => `
      <div class="search-result-item" onclick="window.location.href='${post.url}'">
        <div class="search-result-title">${this.highlightQuery(post.title, query)}</div>
        <div class="search-result-excerpt">${this.highlightQuery(post.excerpt, query)}</div>
        <div class="search-result-meta">
          <span class="search-result-category">${post.category}</span>
          <span class="search-result-date">${this.formatDate(post.date)}</span>
        </div>
      </div>
    `).join('');

    resultsContainer.innerHTML = resultsHTML;
  }

  highlightQuery(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  showSearchResults() {
    const searchResults = document.querySelector('#search-results');
    if (searchResults) {
      searchResults.hidden = false;
      this.isSearchActive = true;
    }
  }

  hideSearchResults() {
    const searchResults = document.querySelector('#search-results');
    if (searchResults) {
      searchResults.hidden = true;
      this.isSearchActive = false;
    }
  }

  // Category Filter Management
  setupCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-option');
    const categoryLinks = document.querySelectorAll('[data-category]');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter;
        this.applyFilter(filter);
      });
    });

    // Show category filter on category link hover (desktop only)
    if (window.innerWidth > 768) {
      categoryLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          // Could show preview or quick filter here
        });
      });
    }
  }

  applyFilter(category) {
    const posts = document.querySelectorAll('.post-card');
    const filterButtons = document.querySelectorAll('.filter-option');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
    
    // Filter posts
    posts.forEach(post => {
      const postCategory = post.dataset.category;
      if (category === 'all' || postCategory === category) {
        post.style.display = 'block';
        post.style.animation = 'fadeInUp 0.5s ease forwards';
      } else {
        post.style.display = 'none';
      }
    });
    
    this.closeCategoryFilter();
  }

  showCategoryFilter() {
    const filter = document.querySelector('#category-filter');
    if (filter) {
      filter.hidden = false;
      setTimeout(() => filter.classList.add('active'), 10);
      document.body.style.overflow = 'hidden';
    }
  }

  closeCategoryFilter() {
    const filter = document.querySelector('#category-filter');
    if (filter) {
      filter.classList.remove('active');
      setTimeout(() => filter.hidden = true, 300);
      document.body.style.overflow = '';
    }
  }

  // Scroll Effects
  setupScrollEffects() {
    const navigation = document.querySelector('.site-navigation');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      // Add scrolled class for styling
      if (currentScrollY > 50) {
        navigation?.classList.add('scrolled');
      } else {
        navigation?.classList.remove('scrolled');
      }
      
      // Hide/show navigation on scroll (optional)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navigation?.style.setProperty('transform', 'translateY(-100%)');
      } else {
        navigation?.style.setProperty('transform', 'translateY(0)');
      }
      
      lastScrollY = currentScrollY;
    });
  }
}

// Reading Time Calculator
class ReadingTimeCalculator {
  static calculate(content) {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  }

  static addToPage() {
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
      const content = article.textContent || '';
      const readingTime = this.calculate(content);
      
      const timeElement = article.querySelector('.reading-time');
      if (timeElement) {
        timeElement.textContent = `${readingTime} min read`;
      }
    });
  }
}

// Back to Top Button
class BackToTopButton {
  constructor() {
    this.createButton();
    this.setupScrollListener();
  }

  createButton() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="18,15 12,9 6,15"></polyline>
      </svg>
    `;
    button.setAttribute('aria-label', 'Back to top');
    button.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 48px;
      height: 48px;
      background: var(--color-primary);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.3s ease;
      z-index: 1000;
    `;
    
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(button);
    this.button = button;
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        this.button.style.transform = 'translateY(0)';
        this.button.style.opacity = '1';
      } else {
        this.button.style.transform = 'translateY(100px)';
        this.button.style.opacity = '0';
      }
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new NavigationManager();
  ReadingTimeCalculator.addToPage();
  new BackToTopButton();
  
  // Add CSS for marks in search results
  const style = document.createElement('style');
  style.textContent = `
    mark {
      background: var(--color-accent);
      color: white;
      padding: 0 2px;
      border-radius: 2px;
    }
    
    .search-no-results {
      text-align: center;
      padding: 2rem;
      color: var(--color-text-secondary);
    }
  `;
  document.head.appendChild(style);
});

// Export for potential module usage
window.NavigationManager = NavigationManager;
window.ReadingTimeCalculator = ReadingTimeCalculator;
window.BackToTopButton = BackToTopButton;
