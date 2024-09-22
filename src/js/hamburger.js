document.addEventListener('DOMContentLoaded', function() {
    var menuTrigger = document.querySelector('.bx--header__menu-trigger');
    var navbarMenu = document.querySelector('.bx--header__nav');
    const overlay = document.getElementById('overlay');
  
    menuTrigger.addEventListener('click', function() {
      // Toggle the active class on the menu button
      menuTrigger.classList.toggle('active');
      
      // Toggle the active class on the nav menu
      navbarMenu.classList.toggle('active');

      overlay.classList.toggle('active');
    });
  });
  