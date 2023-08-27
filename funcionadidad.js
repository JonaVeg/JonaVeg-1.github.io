// Función para agregar un testimonio a la página
function agregarTestimonio(nombre, testimonio) {
    const testimoniosDiv = document.getElementById('testimonios-lista');
  
    const testimonioDiv = document.createElement('div');
    testimonioDiv.classList.add('testimonio');
  
    const nombreParrafo = document.createElement('p');
    nombreParrafo.innerHTML = `<strong>${nombre}:</strong>`;
    testimonioDiv.appendChild(nombreParrafo);
  
    const testimonioParrafo = document.createElement('p');
    testimonioParrafo.textContent = testimonio;
    testimonioDiv.appendChild(testimonioParrafo);
  
    testimoniosDiv.appendChild(testimonioDiv);
  }
  
  // Manejador de evento para enviar el testimonio
  document.getElementById('formulario-testimonio').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const testimonio = document.getElementById('testimonio').value;
  
    agregarTestimonio(nombre, testimonio);
  
    // Restablecer los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('testimonio').value = '';
  
    // Guardar el testimonio en el almacenamiento local
    const testimoniosGuardados = JSON.parse(localStorage.getItem('testimonios')) || [];
    testimoniosGuardados.push({ nombre, testimonio });
    localStorage.setItem('testimonios', JSON.stringify(testimoniosGuardados));
  });
  
  // Cargar testimonios guardados del almacenamiento local al cargar la página
  window.addEventListener('load', function() {
    const testimoniosGuardados = JSON.parse(localStorage.getItem('testimonios')) || [];
  
    testimoniosGuardados.forEach(function(testimonio) {
      agregarTestimonio(testimonio.nombre, testimonio.testimonio);
    });
  });
  