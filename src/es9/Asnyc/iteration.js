const obj = [
  new Promise(resolve => resolve(1)),
  new Promise(resolve => resolve(3)),
  new Promise(resolve => resolve(5)),
];

async function before(){
  for(const newObj of obj){
    console.log(newObj);
  }
}

async function after(){
  for await (const newObj of obj){
    console.log(newObj);
  }
}