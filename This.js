// Fora da função -> MODULE.EXPORTS
console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log("Dentro de uma função...");
    console.log(this === exports);
    console.log(this === module.exports);
    // Dentro da função -> GLOBAL
    console.log(this === global);
}

logThis();