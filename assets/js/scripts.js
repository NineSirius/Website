let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
  document.body.classList.toggle('noscroll');
})

overlay.addEventListener('click', function(){
  hamburger.classList.remove('is-active');
  nav.classList.remove('is-active');
  overlay.classList.remove('is-active');
  document.body.classList.remove('noscroll');
})

