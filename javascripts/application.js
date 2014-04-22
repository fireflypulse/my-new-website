$(document).ready(function(){

  var navigation = $('#navigation')[0];

  // fadeIn('#navigation')
  var myWebsite = new MyApp.Binder()
  myWebsite.controller.fadeIn(navigation, 1500)
  myWebsite.bind();
})

var MyApp = function() {}

MyApp.Binder = function() {
  this.controller = new MyApp.Controller();
}

MyApp.Binder.prototype = {

  bind: function() {
    this.bindButtons(this.controller);
  },

  bindButtons: function(controller) {
    $('#about_link').on('click', function(){
      alert('clicked ' + this)
    });
    $('#contact_link').on('click', function(){
      alert('clicked ' + this)
    });

  }

}

MyApp.Controller = function() {}

MyApp.Controller.prototype = {

  fadeIn: function(el, rate) {
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / rate;
      last = +new Date();

      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
      }
    };

    tick();
  },

  aboutMe: function() {

  }


};
