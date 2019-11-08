class pythonJS {

	print(arg){
		console.log(arg)
	}

	len(arr) {
		return arr.length
	}

	list(arg) {

		try {
			return Object.entries(arg);
		} catch(e) {
			if (typeof arg === "string") {
				return arg.split("")
			} else {
				this.print(new Error(e))
			}
		}
	}

	range(a, b, step=0) {
	  let arr = [], start, end;

	  if (
	  	typeof a !== "number" || 
	  	typeof b !== "number" ||
	  	typeof step !== "number"
	  	) return NaN;
	  
	  if (a && !b) {
	   	start = 0; end = a;
	   } else {
	   	start = a; end = b;
	   }

	   if (step === 0) {
	   	for (var i = start; i <= end; i++) arr.push(i);
	   } else {
	   	for (var i = start; i <= end; i+=step) arr.push(i);
	   }
	   
	   return arr;
	}

	map(func, arr) {
		let newArr = []
		
		for(var i = 0; i < this.len(arr); i++) 
			newArr.push(func(arr[i]));
		
		return newArr;
	}

	str(arg) {
		return arg.toString();
	}

	int(arg) {
		return parseInt(arg);
	}

	enumerate(arg) {
		let newArr = []

		for (var i=0; i < this.len(arg); i++) {
			newArr.push([i, arg[i]])
		}
		return newArr
	}

	bool(arg) {
		return Boolean(arg)
	}

	reversed(arg) {
		try {
			return arg.reverse()	
		} catch(e) {
			if (typeof arg === 'string') {
				return arg.split("").reverse().join("")
			} else {
				return new Error(e)
			}
		}
		
	}

	setattr(obj, key, val) {
		newObj = obj
		newObj[key] = val
		return newObj
	}

	
	pow(num, powerTo, mod=0) {
		if (mod) return Math.pow(num, powerTo) % mod;
		if (!mod) return Math.pow(num, powerTo);
		
	}

	round(arg) {
		try {
			return Math.round(arg)
		} catch (e){
			new Error(e)
		}
	}

	min(arg) {
		try {
			return Math.min(...arg)
		} catch(e) {
			new Error(e)
		}
	}

	dict(arg) {
		
		if (arg === undefined) return {};
		let newObj = {}
		for (var i=0; i < this.len(arg); i++) {
			newObj[i] = arg[i]
		}

		return newObj;
	}

}