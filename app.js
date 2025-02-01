let amigos = [];

// Crear función para agregar amigos al array.
function agregarAmigo() {
    // Captura del texto ingresado.
    let textoIngresado = document.getElementById("amigo").value.trim();

    // Validar caracteres especiales.
    if (textoIngresado.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        alert("El nombre no puede contener caracteres especiales.");
        return false;
    }

    // Validar campo vacío.
    if (textoIngresado === "") {
        alert("Por favor escriba un nombre.");
        return false;
    }

    // Validar números en el texto.
    if (textoIngresado.match(/\d/)) {
        alert("El texto no puede contener números.");
        return false;
    }

    // Verificar si el nombre ya fue ingresado.
    if (amigos.includes(textoIngresado)) {
        alert("El nombre ya fue ingresado, por favor elija otro.");
        return false;
    }

    // Agregar amigo al array.
    amigos.push(textoIngresado);
    console.log(amigos);

    // Limpiar el campo de entrada después de agregar el amigo.
    document.getElementById("amigo").value = "";
    actualizarLista(); // Actualiza y agrega el elemento li creado.
}

// Crear función para agregar y hacer display de los amigos agregados.
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener la lista UL.
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos.

    for (let i = 0; i < amigos.length; i++) { // Recorre el array.
        let li = document.createElement("li"); // Crear un nuevo elemento <li> con el nombre.
        li.textContent = amigos[i]; // Asignar el nombre actual al <li>.
        lista.appendChild(li); // Agregar <li> a la lista.
    }
}

// Crear función para sortear a los amigos y seleccionar uno aleatoriamente.
function sortearAmigo() {
    // Validar que haya amigos en la lista.
    if (amigos.length <= 3) {
        alert("Debes agregar más de 3 amigos para realizar el sorteo.");
        return; // Detener la ejecución si no hay suficientes amigos.
    }

    // Generar índice aleatorio dentro del rango del array.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado.
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML.
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong> 🎉`;

    // Cambiar el tamaño de la letra del resultado.
    resultado.style.fontSize = "48px"; //Cambiar el tamaño de la letra

    // Limpiar la lista de amigos después del sorteo.
    amigos = []; // Vaciar el array de amigos
    actualizarLista(); // Limpiar la lista visualmente
}

// Crear función para reiniciar la lista y el resultado
function reiniciar() {
    amigos = []; // Vaciar el array de amigos.
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado.
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada.
    actualizarLista(); // Limpiar la lista visualmente.
}
