//FS = Acceder a archivos de nuestro sistema y editarlos / Bases de Datos.

/* const fs = require(`fs`);

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
    console.log(data.toString());
    })
} */

//--Escribir
/* function escribir(ruta, contenido,cb) {
    fs.writeFile(ruta, contenido, function(err) {
     if(err) {
         console.log("No he podido escribirlo", err);
     }else {
         console.log("Se ha escrito correctamente.")
     }
    })
} */

/* escribir(__dirname + `/archivo01.txt`, `Soy un archivo Nuevo`, console.log); */
//leer(__dirname + `/archivo.txt`, console.log);

//Promesa
/* const fs = require(`fs`).promises;

const readFile = async () => {
    const file = await fs.readFile(`/archivo.txt`, {encoding: `utf-8`});
    console.log(file);
}
readFile();  */