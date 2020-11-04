//Async and Await
async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Hola", nombre);
            resolve(nombre);
        }, 1000);
    })
}
async function main() {
    await hola("Luisa");
}
console.log("Comenzamos!!");
main();