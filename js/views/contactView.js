// Filename: contactView
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router',
  'models/contactModel',
  'text!templates/contact.html'
], function($, _, Backbone, Router, ContactModel, ContactTpl){

  var contactView = Backbone.View.extend({
      el: $("#page"),
      initialize: function(){
        console.log('init contact view');
        this.render();
      },
      events: {
        'submit .contact-save': 'saveDetails'
      },
      render: function(){
        this.$el.html( _.template( ContactTpl, {} ) );
      },
      saveDetails: function(e){
        var options = {query: 'users'}
        this.model = new ContactModel(options);

        this.model.set('firstname', this.$('.name').val());
        this.model.set('lastname', this.$('.last-name').val());

       // console.log(this.model.toJSON())
       // console.log( $(e.target).serialize() );
        this.model.save( this.model.toJSON(), {
          success: function (data) {
            console.log(data.toJSON());
          },
          error: function (data) {
            console.log('eror' + data )
          }

        });

        return false;
      }
  });

  return contactView;

});
