function hola(nombre, miCallback) {
    setTimeout(function() {
    console.log(`Hola, `+ nombre);
    miCallback(nombre);
}, 1000);
}
function adios(nombre, otroCallback) {
    setTimeout(function() {
    console.log(`Adios`, nombre);
    otroCallback();
    }, 1500)
}

function hablar(callbackHablar) {
    setTimeout(function() {
      console.log("Vamos a hablar");
    callbackHablar();
    }, 1200);
}

//--
function conversacion(nombre, veces, callback) {
if(veces > 0) {
    hablar(function() {
     conversacion(nombre, --veces, callback);
    })
}else {
    adios(nombre, callback)
}
}
console.log("Iniciando proceso");
hola("Carlos", function(nombre) {
conversacion(nombre, 3, function() {
    console.log("Proceso terminao");
});
})
/* console.log(`Iniciando Proceso...`);
hola(`Carlos`, function(nombre) {
    hablar(function() {
        adios(nombre, function() {
            console.log(`Terminando el proceso...`)
        });
    })
}); */