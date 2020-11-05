//Node.js => child_process => podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.
//spawn:Devuelva datos binarios enormes a Node / devolver o recibir datos desde que el proceso arranca. 
//exec: Cuando quieras que el proceso hijo devuelva mensajes de estado simple / datos al final de la ejecución.
const { exec } = require(`child_process`);
//const { stdout, stderr } = require("process");

exec(`node src/modulos/consoles.js`, (err, stdout, stderr) => {
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})