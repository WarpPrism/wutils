/**
 * 判断是否是空对象
 * @param {*} obj
 */
export const isEmptyObj = (obj = {}) => {
  if (Object.prototype.toString.call(obj) != '[object Object') {
    return false;
  }
  for (let prop in obj) {
    return false;
  }
  return true;
}

/**
 * @desc jQuery extend method
 * @desc jQuery.extend( [deep ], target, object1 [, objectN ] )
 * @desc 该方法会修改target对象本身
 */
export const extend = () => {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

/**
 *
 * @desc   对象转换成 查询字符串
 * @param  {Object} obj
 * @return {String}
 */
export const stringfyQueryString = (obj) => {
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
      var value = obj[key];

      if (value instanceof Array) {
          for (var i = 0; i < value.length; ++i) {
              pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
          }
          continue;
      }

      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return pairs.join('&');
}