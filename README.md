# README: Proyecto - Amigo Secreto

## Descripción
Este proyecto consiste en una aplicación web que permite realizar un sorteo de «Amigo Secreto». Los usuarios pueden agregar los nombres de sus amigos, sorteando uno aleatoriamente, y eligiendo a una persona para hacerle un regalo en secreto u cualquier actividad del gusto del usuario. Además, se implementa una función para reiniciar el juego, borrando los nombres ingresados y los resultados previos.

## Características Principales
- **Ingreso de Amigos**: Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto y añadirlos a una lista.
- **Sorteo Aleatorio**: Al pulsar un botón, se selecciona aleatoriamente un amigo de la lista para hacerle un regalo. Utiliza `Math.random()` y `Math.floor()` para seleccionar el índice aleatorio.
- **Reinicio del Juego**: Al pulsar el botón de reiniciar, se borran los datos ingresados y los resultados mostrados, permitiendo comenzar de nuevo.
- **Interfaz Amigable**: Colores y fuentes personalizadas para ofrecer una experiencia visual clara y agradable.

## Tecnologías Utilizadas
- **HTML**: Estructura básica de la página.
- **CSS**: Estilos visuales para mejorar la apariencia y experiencia de usuario.
- **JavaScript**: Funcionalidad de la aplicación, incluyendo el manejo de eventos y la lógica del sorteo.

## Comenzando 🚀
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

Mira la sección de **Despliegue** para conocer cómo desplegar el proyecto.

### Pre-requisitos 📋
Para ejecutar el proyecto, necesitas tener instalado un navegador web que soporte HTML, CSS y JavaScript.

No es necesario instalar nada adicional, solo asegurarte de tener acceso al archivo `index.html`.

## Funcionamiento

### 1. Agregar Amigos
Los usuarios ingresan un nombre en el campo de texto y hacen clic en el botón "Añadir" para agregar a un amigo a la lista.  
Si el nombre ya está en la lista o contiene caracteres no permitidos, se muestra un mensaje de alerta.

### 2. Sorteo Aleatorio
Cuando hay al menos tres amigos en la lista, los usuarios pueden hacer clic en el botón "Sortear amigo" para seleccionar un amigo aleatoriamente.  
La función valida que haya suficientes amigos, genera un índice aleatorio usando `Math.random()` y `Math.floor()`, y muestra el resultado en la página.

### 3. Reiniciar Juego
El botón "Reiniciar" permite borrar todos los nombres ingresados y los resultados, permitiendo al usuario iniciar un nuevo juego desde cero.

## Funciones Principales

### `agregarAmigo()`
- Valida que el nombre ingresado no contenga caracteres especiales ni números y que no se repita.
- Agrega el nombre a la lista y actualiza la interfaz.

### `sortearAmigo()`
- Verifica que haya al menos tres amigos en la lista.
- Genera un índice aleatorio para seleccionar un nombre de la lista y muestra el resultado en pantalla.

### `reiniciarJuego()`
- Limpia la lista de amigos y el resultado sorteado para reiniciar el juego.

### Ejecutando las pruebas ⚙️

Actualmente, el proyecto no cuenta con pruebas automatizadas configuradas. Sin embargo, puedes probar la funcionalidad de la aplicación manualmente:

1. Agregar algunos amigos en el campo de texto.
2. Pulsar el botón "Sortear amigo" para realizar el sorteo.
3. Verifica que el nombre seleccionado sea uno de los amigos que hayas añadido.
4. Usar el botón "Reiniciar" para borrar los datos.

### Analizando las pruebas end-to-end 🔩

Las pruebas end-to-end deberían verificar que la funcionalidad de agregar amigos, realizar un sorteo aleatorio y reiniciar el juego funcione correctamente.

Un ejemplo de prueba manual es:
- Agregar al menos tres amigos.
- Pulsar "Sortear amigo" y verificar que se selecciona un amigo aleatoriamente.

### Pruebas de estilo de codificación ⌨️

El proyecto no incluye pruebas de estilo automatizadas. Puedes hacer las revisiones manuales para asegurarte de que el código sigue las mejores prácticas de HTML, CSS y JavaScript.

## Despliegue 📦

Este proyecto puede ser desplegado en cualquier servidor web estático. Asegúrate de tener acceso al archivo `index.html` para acceder a la aplicación.

### Contribuciones
Las contribuciones son bienvenidas. Si deseas realizar cambios o mejorar el proyecto, por favor, haz un fork del repositorio y crea un pull request con tus sugerencias.

### Licencia
Este proyecto está licenciado bajo la Licencia MIT.

### Instalación 🔧

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/Jess-93/challenge-amigo-secreto.git
    ```

2. Navega hasta la carpeta del proyecto:

    ```bash
    cd challenge-amigo-secreto
    ```

3. Abre el archivo `index.html` en tu navegador.

    ```bash
    abrir index.html con tu navegador
    ```
## Expresiones de Gratitud 🎁

Agradezco a Oracle Next Education (ONE) por permitirme acceder a estas formaciones tan didácticas y profesionales, así como al excelente personal y profesorado de Alura LATAM, son excelentisímos en la enseñanza. ¡Gracias!

    
