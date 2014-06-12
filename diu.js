(function(){
	global.屌 = function( obj, methodName ){
		if( !methodName ){
			return obj;
		}
		methodName = methodName.replace(/[^a-zA-Z0-9\-]/g,'')
		if ( typeof obj[methodName] === "function" ){
			return obj[methodName].bind(obj);
		}
		return obj[methodName];
	};

	['老味','鳩','啦','仆街','撚'].forEach( function(valName){
		Object.defineProperty( Object.prototype, valName,{
			get : function(){
				return this;
			}
		});
	});

	global.頂 = function( shit ){
		throw shit;
	}
})();