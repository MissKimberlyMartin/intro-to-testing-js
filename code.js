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

function sayHello(input) {
    return "Hello, " + input + "!";
}

