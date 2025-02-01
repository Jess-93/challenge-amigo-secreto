// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


//Crear funciona para agregar amigos al array
function agregarAmigo() {
    // Captura del texto ingresado
    let textoIngresado = document.getElementById("amigo").value.trim();

    // Validar caracteres especiales
    if (textoIngresado.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        alert("El nombre no puede contener caracteres especiales.");
        return false;
    }

    // Validar campo vacío
    if (textoIngresado === "") {
        alert("Por favor escriba un nombre.");
        return false;
    }

    // Validar números en el texto
    if (textoIngresado.match(/\d/)) {
        alert("El texto no puede contener números.");
        return false;
    }

    // Verificar si el nombre ya fue ingresado
    if (amigos.includes(textoIngresado)) {
        alert("El nombre ya fue ingresado, por favor elija otro.")
        return false;
    }

    // Agregar amigo al array
    amigos.push(textoIngresado);
    console.log(amigos);

    // Limpiar el campo de entrada después de agregar el amigo
    document.getElementById("amigo").value = "";
}

//Crear función para agregar y hacer display de los amigos agregados
function actualizarLista () {
let lista = getElementById("listaAmigos");
lista.innerHTML = ""; //limpa la lista antes de agregar nuevos elementos

for (let i = 0; i < amigos.length; i++); //Recorre el array en bucle para agregar nombres
    let li = document.createElement("li"); // Se crea nuevo elemento y asociacióm
    li.textContent = amigos [i]; // Obtiene el nombre actual




}