console.log 
{ let nombreDeLaVariable;}
nombreDeLaVariable = "Mauro";
// Titulo de la pagina

let helado = "chocolate";
if (helado === "chocolate") {
  alert("");
} else {
  alert("error 404");
}

function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
    }
  }

  function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su apellido.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miapellido);
      miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
    }
  }
  
  // mensaje en el log
console.log("Esto es un mensaje en el log");
// error
console.error("Esto es un error");
// Añadir información
console.info("Añade información a la consola");
// warning
console.warn("Envía un aviso");

const gente = [
	{nombre: 'Diego', edad: 30},
  {nombre: 'Toni', edad: 10},
  {nombre: 'Johana', edad: 20},
];
console.table(gente);
gente.forEach((persona,index) =>{
	console.groupCollapsed(`${persona.nombre}`);
  console.log(persona.edad);
  console.log("hola");
  console.groupEnd(`${persona.nombre}`);
});
