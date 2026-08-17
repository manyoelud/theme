// Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
});

function initializeTheme() {
  // Initialize cart functionality
  initializeCart();
  
  // Initialize mobile menu (if applicable)
  initializeMobileMenu();
}

function initializeCart() {
  const cartLinks = document.querySelectorAll('.cart-link');
  
  cartLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = '/cart';
    });
  });
}

function initializeMobileMenu() {
  // Add mobile menu functionality here
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Export functions for use in other scripts
window.ThemeUtils = {
  showNotification: showNotification
};
