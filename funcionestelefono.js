function realizarLlamada() {
    // Reemplaza el número de teléfono con el que deseas que se realice la llamada
    var numeroTelefono = '2225402887';

    // Reemplaza 'Hola, estoy interesado en cotizar. ¿Cómo puedo empezar?' con tu mensaje predeterminado.
    var mensaje = encodeURIComponent('Hola, estoy interesado en cotizar. ¿Cómo puedo empezar?');

    // Construye la URL de WhatsApp con el número de teléfono y el mensaje predeterminado.
    var urlWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + mensaje;
    window.location.href = urlWhatsApp;
    
    // Utiliza la API de marcación tel: para iniciar la llamada
    window.location.href = 'tel:' + numeroTelefono;
  }
  