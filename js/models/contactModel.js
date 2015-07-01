define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var contactModel = Backbone.Model.extend({

  		defaults : {
          query : "unknown"
      },  

      initialize: function( options ) {
  			this.query = options.query; 
  		},

      url : function() {
	        return 'http://backbone-beginner.herokuapp.com/' + this.query;
	    },
	    
	    parse : function(res) { 
         // because of jsonp 
	        return res.data;
	    }

    });

  	return contactModel;

});
