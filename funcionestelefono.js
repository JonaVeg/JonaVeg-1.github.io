function realizarLlamada() {
    // Reemplaza el número de teléfono con el que deseas que se realice la llamada
    var numeroTelefono = '2225402887';

    // Reemplaza 'Hola, estoy interesado en cotizar. ¿Cómo puedo empezar?' con tu mensaje predeterminado.
    var mensaje = encodeURIComponent('Hola, estoy interesado en cotizar. ¿Cómo puedo empezar?');

    // Construye la URL de WhatsApp con el número de teléfono y el mensaje predeterminado.
    var urlWhatsApp = 'https://wa.me/522225402887' + numeroTelefono + '?text=' + mensaje;
    window.location.href = urlWhatsApp;
    
    // Utiliza la API de marcación tel: para iniciar la llamada
    window.location.href = 'tel:' + numeroTelefono;
  }
  
  // Función modificada con el nuevo nombre
function mandarMensaje() {
  // Reemplaza '522225402887' con tu número de teléfono completo, incluyendo el código de país.
  var numeroTelefono = '2225402887';

  // Reemplaza 'Hola, estoy interesado en cotizar. ¿Cómo puedo empezar?' con tu mensaje predeterminado.
  var mensaje = encodeURIComponent('Hola, estoy interesado en cotizar. ¿Cómo puedo empezar?');

  // Construye la URL de WhatsApp con el número de teléfono y el mensaje predeterminado.
  var urlWhatsApp = 'https://wa.me/522225402887' + numeroTelefono + '?text=' + mensaje;

  // Redirige a la URL de WhatsApp.
  window.location.href = urlWhatsApp;
}
