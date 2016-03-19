(function(){
  var navToggle = document.querySelector('.vis'),
      headerNav = document.querySelector('.header-nav'),
      visIcon = document.querySelector('.vis-icon');

  navToggle.addEventListener('click', function(){
    headerNav.classList.toggle('hidden');
    if(this.children[0].innerText === 'Hide Nav') {
      navToggle.children[0].innerText = 'Show Nav';
      visIcon.src = 'images/show.svg'
    } else {
      navToggle.children[0].innerText = 'Hide Nav';
      visIcon.src = 'images/hide.svg'
    }

  }, false);
})();
