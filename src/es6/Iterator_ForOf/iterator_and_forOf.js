let fibonacci = {
	[Symbol.iterator]() {
		let previous = 0, 
		currrent = 1;
		return {
			next () {
				[ previous, currrent ] = [ currrent, previous + currrent ];
				return { 
					done: false, 
					value: currrent 
        };
			}
		};
	}
}

for (let n of fibonacci) {

	if (n > 1000){

		break;

  }

  console.log(n);

}
