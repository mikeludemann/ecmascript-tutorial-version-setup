async function getAllText(){

	try {

		var txt = await getText("Test");

	} catch (error) {

		return false;

	}

	return txt;

}

getAllText();
