(function() {
    emailjs.init('c-rPOLC9BiRxecT6C'); // Reemplaza con tu Public Key de EmailJS
  
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío tradicional del formulario
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        emailjs.sendForm('service_fivjd0k', 'template_ayidu8t', this)
          .then(function(response) {
            console.log('Mensaje enviado con éxito', response);
            alert('Tu mensaje ha sido enviado con éxito. ¡Gracias!');
            form.reset(); // Limpiar el formulario
          }, function(error) {
            console.log('Error al enviar el mensaje', error);
            alert('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
          });
      });
    }
  })();