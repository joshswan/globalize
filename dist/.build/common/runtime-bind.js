

var runtimeBind = function( args, cldr, fn, runtimeArgs ) {

	// 1: fn.name isn't supported by IE.
	var argsStr = JSON.stringify( args ),
		fnName = fn.name || fn.funcName,
		locale = cldr.locale;

	fn.runtimeKey = runtimeKey( fnName, locale, null, argsStr );

	fn.generatorString = function() {
		return "Globalize(\"" + locale + "\")." + fnName + "(" + argsStr.slice( 1, -1 ) + ")";
	};

	fn.runtimeArgs = runtimeArgs;

	return fn;
};

