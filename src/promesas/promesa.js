//Promises
function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Hola", nombre);
            resolve(nombre);
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise(function(resolve, reject) {
     setTimeout(function() {
      console.log("Bueno...Adios", nombre);
      //resolve(nombre); 
      reject("Hay un error")
     }, 1300);
    })
}

//--
hola("Alma")
//adios("Alma")
/* .then(nombre => {
    return adios(nombre);
}) */
.then(adios)
.catch(error => console.error("Tenemos un error"))
//console.error(error)
.then((nombre) => {
    console.log("Terminando el Proceso");
})