/**
 * Last Post Countdown Timer
 * Motivational tool to encourage regular blogging
 */

class LastPostCountdown {
  constructor() {
    this.lastPostDate = this.getLastPostDate();
    this.countdownElement = document.getElementById('countdown-display');
    this.messageElement = document.getElementById('countdown-message');
    
    if (this.countdownElement) {
      this.init();
    }
  }

  init() {
    this.updateCountdown();
    // Update every second
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  getLastPostDate() {
    // In a real Jekyll site, this would be populated from site.posts[0].date
    // For demo purposes, let's use a recent date
    const mockLastPost = new Date('2025-06-04T00:00:00Z'); // GitHub Copilot DevOps post
    return mockLastPost;
  }

  updateCountdown() {
    const now = new Date();
    const timeDiff = now - this.lastPostDate;
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Update display
    this.updateElement('days', days);
    this.updateElement('hours', hours);
    this.updateElement('minutes', minutes);
    this.updateElement('seconds', seconds);

    // Update motivational message
    this.updateMessage(days);
  }

  updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
      // Add animation effect when value changes
      if (element.textContent !== value.toString()) {
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 200);
      }
      element.textContent = value;
    }
  }

  updateMessage(days) {
    if (!this.messageElement) return;

    const messageText = this.messageElement.querySelector('.message-text');
    if (!messageText) return;

    let message = '';
    let bgColor = '';

    if (days === 0) {
      message = "🔥 Posted today! You're on fire!";
      bgColor = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
    } else if (days <= 3) {
      message = "💪 Fresh content! Keep the momentum going!";
      bgColor = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
    } else if (days <= 7) {
      message = "📝 Time for a new post soon?";
      bgColor = 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)';
    } else if (days <= 14) {
      message = "⏰ Getting close to two weeks...";
      bgColor = 'linear-gradient(135deg, #fd7e14 0%, #dc3545 100%)';
    } else if (days <= 30) {
      message = "🚨 Time to break the silence!";
      bgColor = 'linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)';
    } else {
      message = "💀 The blog is hibernating... wake it up!";
      bgColor = 'linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%)';
    }

    messageText.textContent = message;
    this.messageElement.style.background = bgColor;
  }

  destroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

// View Toggle Functionality
class ViewToggle {
  constructor() {
    this.postsContainer = document.getElementById('posts-container');
    this.viewToggles = document.querySelectorAll('.view-toggle');
    this.currentView = 'grid';
    
    this.init();
  }

  init() {
    this.viewToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        const view = e.target.closest('.view-toggle').dataset.view;
        this.switchView(view);
      });
    });
  }

  switchView(view) {
    if (view === this.currentView) return;

    this.currentView = view;
    
    // Update active toggle
    this.viewToggles.forEach(toggle => {
      toggle.classList.toggle('active', toggle.dataset.view === view);
    });

    // Update container class
    if (this.postsContainer) {
      this.postsContainer.classList.toggle('posts-grid', view === 'grid');
      this.postsContainer.classList.toggle('posts-list', view === 'list');
    }
  }
}

// Tag Filter Functionality
class TagFilter {
  constructor() {
    this.postCards = document.querySelectorAll('.post-card');
    this.tagElements = document.querySelectorAll('.post-tag');
    this.activeFilters = new Set();
    
    this.init();
  }

  init() {
    this.tagElements.forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.preventDefault();
        const tagText = e.target.textContent.trim();
        this.toggleFilter(tagText);
      });
    });
  }

  toggleFilter(tag) {
    if (this.activeFilters.has(tag)) {
      this.activeFilters.delete(tag);
    } else {
      this.activeFilters.add(tag);
    }
    
    this.applyFilters();
    this.updateTagStates();
  }

  applyFilters() {
    if (this.activeFilters.size === 0) {
      // Show all posts
      this.postCards.forEach(card => {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.5s ease forwards';
      });
      return;
    }

    this.postCards.forEach(card => {
      const cardTags = card.dataset.tags ? card.dataset.tags.split(',') : [];
      const hasMatchingTag = cardTags.some(tag => this.activeFilters.has(tag.trim()));
      
      if (hasMatchingTag) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.5s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  updateTagStates() {
    this.tagElements.forEach(tag => {
      const tagText = tag.textContent.trim();
      tag.classList.toggle('active', this.activeFilters.has(tagText));
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LastPostCountdown();
  new ViewToggle();
  new TagFilter();
  
  // Add additional styles for list view and active tags
  const style = document.createElement('style');
  style.textContent = `
    .posts-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .posts-list .post-card {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      padding: 1.5rem;
    }
    
    .posts-list .post-content {
      flex: 1;
    }
    
    .posts-list .post-tags {
      margin-bottom: 0.5rem;
    }
    
    .posts-list .post-title {
      margin-bottom: 0.5rem;
    }
    
    .posts-list .post-excerpt {
      margin-bottom: 0.75rem;
    }
    
    .post-tag.active {
      background: var(--color-primary) !important;
      color: white !important;
      border-color: var(--color-primary) !important;
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 102, 204, 0.3);
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .countdown-number {
      animation: pulse 2s infinite ease-in-out;
    }
  `;
  document.head.appendChild(style);
});

// Export for potential module usage
window.LastPostCountdown = LastPostCountdown;
window.ViewToggle = ViewToggle;
window.TagFilter = TagFilter;
