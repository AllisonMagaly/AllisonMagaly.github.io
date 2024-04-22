// Define la fecha objetivo (año, mes (indexado desde 0), día, horas, minutos, segundos)
const fechaObjetivo = new Date('2024-05-11T00:00:00');

// Función para actualizar el contador
function actualizarContador() {
  const ahora = new Date(); // Obtiene la fecha y hora actual
  const diferencia = fechaObjetivo - ahora; // Calcula la diferencia entre la fecha objetivo y la actual en milisegundos

  if (diferencia <= 0) {
    // Si la fecha objetivo ha pasado, muestra un mensaje
    document.getElementById('contador').textContent = 'Hoy es el dia de mis XV';
  } else {
    // Si la fecha objetivo no ha pasado aún, calcula el tiempo restante en días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualiza el contenido del elemento con el ID 'contador' con el tiempo restante
    document.getElementById('contador').textContent = `${dias} días | ${horas} horas | ${minutos} minutos | ${segundos} segundos`;
  }
}

// Llama a la función actualizarContador cada segundo para actualizar el contador en tiempo real
setInterval(actualizarContador, 1000);

// Llama a la función para actualizar el contador al cargar la página
actualizarContador();
