let status = true;

function getText(string){
  
	return new Promise((resolve, reject) => {

		setTimeout(() => {

			try{

        resolve(string);
        
        console.log(string);
        
			} catch (err){

        reject(err);

        console.log(err);
        
			} finally {

        console.log("Promise are finished");

        status = false;

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
