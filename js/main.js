
// Require.js allows us to configure shortcut alias
require.config({
	paths: {
	    jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
	    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
	    backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min',
	    templates: '../templates'
	}

});

 // Load our app module and pass it to our definition function
require([
	'app'
], function(App){
  	App.initialize();
});


/*define(["./extras"], function(Extras) {
    //Uses extras in here.
    return {

    }
});*/
