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
      controller.aboutMe();
    });
    $('#contact_link').on('click', function(){
      controller.contact();
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

  michaelGleason: function() {
    var divs = document.querySelectorAll('div')
    var welcome = document.querySelectorAll('#welcome')
    this.addClass(divs, "hidden")
    this.removeClass(welcome, "hidden")
  },

  aboutMe: function() {
    // alert('clicked ' + this);
    var divs = document.querySelectorAll('div')
    var about_div = document.querySelectorAll('#about')
    this.addClass(divs, "hidden")
    this.removeClass(about_div, "hidden")
  },

  contact: function() {
    // alert('clicked ' + this);
  },

  addClass: function(elements, className) {
    for(i in elements){
      if (elements[i].classList)
        elements[i].classList.add(className);
      else
        elements[i].className += ' ' + className;
    }
  },

  // Might be unnecessary since I am going to fade in.
  removeClass: function(elements, className) {
    for(i in elements){
      if (elements[i].classList)
        elements[i].classList.remove(className);
      else
        elements[i].className = elements[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

};
