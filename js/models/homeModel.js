define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var homeModel = Backbone.Model.extend({

      url : function() {
	        return 'http://backbone-beginner.herokuapp.com/users';
	    }

    });

  	return homeModel;

});
