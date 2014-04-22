$(document).ready(function(){

  // $('#navigation').fadeIn(1000);

  // fadeIn('#navigation')

  var navbar = document.querySelectorAll('#navigation')[0];
  fadeIn(navbar);
})






function fadeIn(el) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 1500;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}