function getText(string){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try{
				resolve(string);
				console.log(string);
			} catch (err){
				reject(err);
				console.log(err);
			}
		})
	})
}

function getAllText(){

	getText("A")
	  .then(() => getText("B"))
		  .then(() => getText("C"))

}

getAllText();
