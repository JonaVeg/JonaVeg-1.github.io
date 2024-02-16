  function mandarMensaje() {
    // Reemplaza 'Hola, estoy interesado en cotizar. ¿Cómo puedo empezar?' con tu mensaje predeterminado.
    var mensaje = encodeURIComponent('Hola, estoy interesado en cotizar. ¿Cómo puedo empezar?');
  
    // Construye la URL de WhatsApp con el número de teléfono y el mensaje predeterminado.
    var urlWhatsApp = 'https://wa.me/522225402887' + numeroTelefono + '?text=' + mensaje;
  
    // Redirige a la URL de WhatsApp.
    window.location.href = urlWhatsApp;
  }
  