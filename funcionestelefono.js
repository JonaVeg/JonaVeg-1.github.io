function realizarLlamada() {
    // Reemplaza el número de teléfono con el que deseas que se realice la llamada
    var numeroTelefono = '2225402887';

    // Construye la URL de WhatsApp con el número de teléfono.
    var urlWhatsApp = 'https://wa.me/' + numeroTelefono;
    // Redirige a la URL de WhatsApp.
    window.location.href = urlWhatsApp;
    
    // Utiliza la API de marcación tel: para iniciar la llamada
    window.location.href = 'tel:' + numeroTelefono;
  }
  