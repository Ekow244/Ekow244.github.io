/* Go to a specific carousel slide and return to the top of the page */

function goToSlide(number) {
  $('#myCarousel').carousel(number);
  window.scrollTo(0, 0);
}

/* Push menu */

(function () {
  var body = document.body;
  var mask = document.createElement('div');
  mask.className = 'mask';

  function openMenu() {
    body.classList.add('sml-open');
    body.appendChild(mask);
  }

  function closeMenu() {
    body.classList.remove('sml-open');
    if (mask.parentNode) mask.parentNode.removeChild(mask);
  }

  [].slice.call(document.querySelectorAll('.toggle-menu')).forEach(function (el) {
    el.addEventListener('click', openMenu);
  });

  mask.addEventListener('click', closeMenu);

  [].slice.call(document.querySelectorAll('.menu-buttons')).forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      closeMenu();
      goToSlide(parseInt(el.getAttribute('data-slide-index'), 10));
    });
  });
})();
