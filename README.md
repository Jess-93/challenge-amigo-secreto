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

## Instalación
Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/usuario/amigo-secreto.git

