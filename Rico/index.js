let indice = 0;

function mostrarImagen(indice) {
  const imagenes = document.querySelectorAll('.imagen');
  imagenes.forEach((imagen, i) => {
    imagen.classList.remove('activo');
    if (i === indice) {
      imagen.classList.add('activo');
    }
  });
}

function siguiente() {
  indice++;
  if (indice === document.querySelectorAll('.imagen').length) {
    indice = 0;
  }
  mostrarImagen(indice);
}

// Llama a la función 'siguiente' cada 3 segundos (3000 milisegundos)
setInterval(siguiente, 3000);

mostrarImagen(indice);
 //menu hamburguesa

 document.getElementById('hamburger').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  if (menu.style.display === "none") {
      menu.style.display = "flex";
  } else {
      menu.style.display = "none";
  }
});


