function async (production, ...params) {

  let iterator = production(...params);
  
	return new Promise((resolve, reject) => {

		let loop = (value) => {

      let result;
      
			try {

        result = iterator.next(value);
        
      }
      
			catch (error) {

        reject(error);
        
      }
      
			if (result.done){

				resolve(result.value);

      }
			else if (typeof result.value === "object" && typeof result.value.then === "function"){

				result.value.then((value) => {

          loop(value);
          
				}, (error) => {

          reject(error);
          
        });
        
      }
			else{

        loop(result.value);
      
      }

    }
    
    loop();
    
  });
  
}

function setup (text, after) {

	return new Promise((resolve, reject) => {

    setTimeout(() => resolve(text), after);
    
  });
  
}

async(function* (greeting) {

	let foo = yield setup("foo", 300)
	let bar = yield setup("bar", 200)
  let baz = yield setup("baz", 100)
  
  return `${greeting} ${foo} ${bar} ${baz}`
  
}, "Hello").then((msg) => {

  console.log("RESULT:", msg);
  
});
