const name = "John Doe";

var product = { 
	amount: 2, 
	art: "Coffee", 
	price: 3.99 
};

var message = `Hello ${name},
want to buy ${product.amount} ${product.art} for
a total of ${product.amount * product.price} €?`;

console.log(message);
