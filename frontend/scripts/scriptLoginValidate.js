(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      // Leemos los valores del formulario
      let usuario = document.getElementById("usuario").value;
      let contrasena = document.getElementById("contrasena").value;

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      // VALIDAR USUARIO y que sea solo texto
      var patron = /^[a-zA-Z\s]+$/;
      if (!patron.test(usuario)) {
        alert('El usuario debe tener formato de solo letras.');
        event.preventDefault();
      }

      // Validar que la contraseña sea mayor a 4 digitos
      if (contrasena.length <= 4) {
        event.preventDefault()
        event.stopPropagation()
        document.getElementById("contrasena").classList.add('is-invalid');
      } else {
        // Si la contraseña es mayor a 4 digitos, quitar la clase de error
        document.getElementById("clave_requerida").style.display = "none";

        // Validar que el usuario y contraseña coincidan
        if (usuario == "pamela" && contrasena == "12345") {
          event.preventDefault()
          event.stopPropagation()
          // Redireccionamos
          console.log('Se redirecciona');
          window.location.href = "index.html";
        } else {
          // Mostrar alerta
          event.preventDefault()
          event.stopPropagation()
          alert('El usuario o contraseña no coinciden. Reintente nuevamente.');
        }

      }

      form.classList.add('was-validated')
    }, false)
  })
})()