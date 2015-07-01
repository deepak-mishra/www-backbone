// Filename: contactView
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router',
  'models/homeModel',
  'text!templates/home.html'
], function($, _, Backbone, Router, HomeModel, HomeTpl){

  var homeView = Backbone.View.extend({
      el: $("#page"),
      events: {
        'submit .contact-save': 'saveDetails'
      },
      initialize: function(){
        console.log('init home view');
        this.render();
      },
      render:function(){
        var homeModel = new HomeModel;
        console.log( homeModel.toJSON() );

        
        var template = _.template( HomeTpl, {} );
        this.$el.html( template );
      }
  });

  return homeView;

});
