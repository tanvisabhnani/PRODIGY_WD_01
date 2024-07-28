// script.js

document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById('navbar');

  // Change style when scrolled
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });

  // Change style on hover
  var menuItems = navbar.querySelectorAll('a');

  menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      this.style.color = 'orange'; // Example: Change color on hover
    });

    item.addEventListener('mouseout', function() {
      this.style.color = 'white'; // Restore original color
    });
  });
});
