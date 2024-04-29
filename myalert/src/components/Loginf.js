function cambiarVista(vLogin) {
    // ocultar todas las vistas
    const vistas = document.querySelectorAll(".vista");
    vistas.forEach((vista) => (vista.style.display = "none"));
  
    // mostrar la vista seleccionada
    const vistaSeleccionada = document.getElementById(vLogin);
    vistaSeleccionada.style.display = "block";
  }