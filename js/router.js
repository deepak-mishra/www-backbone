// Filename: router.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'views/homeView',
  'views/contactView'
], function($, _, Backbone, HomeView, contactView){

  var initialize = function() {
    console.log('router.js');
    var Router = Backbone.Router.extend({
        routes: {
          "": "home", 
          "contact": "contact",
          "home": "home",
        }
    });

    var router = new Router;
    router.on('route:home', function() {
      console.log('home');
      var homeView = new HomeView();
      homeView.render();
    });

    router.on('route:contact', function(id) {
      console.log('contact')
      var contact = new contactView();
     // contact.render({id: id});
    });

    Backbone.history.start();
  }

  return { 
    initialize:initialize
  };

});
