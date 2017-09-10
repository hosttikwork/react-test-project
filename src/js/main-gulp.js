$ = require('jquery');
require('jquery.cookie');

var initApp = require('./init.js');
var $script = require("scriptjs");


$script([], function() {

		initApp();
});

// Update js without full page reload
if (module.hot) {
	module.hot.accept();
}