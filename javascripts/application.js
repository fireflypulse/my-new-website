$(document).ready(function(){

  var navigation = $('#navigation')[0];

  // fadeIn('#navigation')
  var myWebsite = new MyApp.Binder()
  myWebsite.controller.fadeIn(navigation)
})

var MyApp = function() {}

MyApp.Binder = function() {
  this.controller = new MyApp.Controller();
}

MyApp.Controller = function() {}

MyApp.Controller.prototype = {

  fadeIn: function(el) {
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

};
