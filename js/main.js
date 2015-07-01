
// Require.js allows us to configure shortcut alias
require.config({
	paths: {
	    jquery: 'libs/jquery.min',
	    underscore: 'libs/underscore-min',
	    backbone: 'libs/backbone-min',
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
