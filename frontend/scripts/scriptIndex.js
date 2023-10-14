const fraseContainer = document.querySelector('.frase-container');

// Array de frases desde el archivo de texto
const frases = [];

// Variable para llevar el control de la frase actual
let fraseActualIndex = 0;

// Función para cargar frases desde un archivo de texto
function cargarFrasesDesdeArchivo() {
    fetch('../../frases.txt') // Reemplaza 'frases.txt' con la ruta correcta a tu archivo de texto
        .then(response => response.text())
        .then(data => {
            // Dividir por líneas y eliminar líneas vacías
            const lineas = data.split('\n').filter(frase => frase.trim() !== '');
            
            // Agregar cada línea como una frase al array de frases
            frases.push(...lineas);

            // Iniciar el carrusel
            iniciarCarrusel();
        })
        .catch(error => console.error('Error al cargar las frases:', error));
}

// Función para mostrar la siguiente frase en el carrusel con un efecto de desvanecimiento
function mostrarSiguienteFrase() {
    if (fraseActualIndex < frases.length) {
        fraseContainer.style.opacity = 0;
        setTimeout(() => {
            fraseContainer.textContent = frases[fraseActualIndex];
            fraseActualIndex++;
            // Después de establecer el contenido de la nueva frase, desvanécela de nuevo
            setTimeout(() => {
                fraseContainer.style.opacity = 1;
            }, 1000); // 1000 milisegundos (1 segundo) para que aparezca gradualmente
        }, 1000); // 1000 milisegundos (1 segundo) para que se desvanezca gradualmente
    } else {
        // Reiniciar desde la primera frase
        fraseActualIndex = 0;
        fraseContainer.style.opacity = 0;
        setTimeout(() => {
            fraseContainer.textContent = frases[fraseActualIndex];
            fraseActualIndex++;
            // Después de establecer el contenido de la nueva frase, desvanécela de nuevo
            setTimeout(() => {
                fraseContainer.style.opacity = 1;
            }, 1000); // 1000 milisegundos (1 segundo) para que aparezca gradualmente
        }, 1000); // 1000 milisegundos (1 segundo) para que se desvanezca gradualmente
    }
}

// Función para iniciar el carrusel
function iniciarCarrusel() {
    mostrarSiguienteFrase();
    setInterval(mostrarSiguienteFrase, 10000); // Cambia la frase cada 7 segundos (7000 milisegundos)
}

cargarFrasesDesdeArchivo();