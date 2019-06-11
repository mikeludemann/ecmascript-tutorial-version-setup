function message (text, name, timeout) {

	return new Promise((resolve, reject) => {

    setTimeout(() => resolve(`${text} Hello ${name}!`), timeout);
    
  });
  
}

message("", "Foo", 100).then((text) =>

  message(text, "Bar", 200)
  
).then((text) => {

  console.log(`Finish: ${text}`);
  
});
