//Errores 
/* function serompe() {
    return 3 + z;
}
try {
  serompe()
}catch(err) {
    console.error(`Vaya que, tenemos un error`);
    //console.error(err.message);
   // console.error(err);
} */

//Asíncronos
/* function otraFuncion() {
     serompe();
}
function serompe() {
    return 3 + z;
}
function seRompeAsincrona(cb) {
    setTimeout(function() {
        try {
           otraFuncion(); 
           seRompeAsincrona(function(err) {
               console.log("Errores")
           })
           }catch(err) {
               console.error("Todo salió mal.");
               cb(err);
           }
           
    })
} */
/* try {
 otraFuncion();
}catch(err) {
    console.error("Todo salió mal.");
} */
