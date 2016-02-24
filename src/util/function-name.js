define([], function() {

return function( fn ) {
	return fn.name || fn.funcName;
};

});
