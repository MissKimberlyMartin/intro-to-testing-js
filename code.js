// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function

// before refactoring

// function sayHello(input) {
//     if (input === "Jane") {
//         return "Hello, Jane!";
//     } else if (input === "Alex")  {
//         return "Hello, Alex!";
//     } else if (input === "Pat");
//         return "Hello, Pat!";
// }

// after refactoring

// function sayHello(input) {
//     if (typeof input !== "undefined") {
//         return "Hello, " + input + "!";
//     } else {
//         return "Hello, World!";
//     }
// }

function sayHello(input) {
    if (typeof input == "undefined" || typeof input == "boolean") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}




// function sayHello(name){
//     if(typeof name == 'undefined' || typeof name == 'boolean'){
//         return "Hello, World!";
//     }
//     return "Hello, " + name + "!";
// }