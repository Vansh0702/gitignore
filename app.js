const name="vansh";
let age =23;
const isLearning =true;
const port=process.env.port || 9000; 
// display the informations
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Learning: " + isLearning);
console.log("port: " + port);

// function
function greet(name){
    return "Hello, " + name + "!";
}

console.log(greet(name));