//Variables
const button = document.getElementById("button");
const mensaje = document.querySelector('.mensaje');

const int = new Interfaz();
const newApi = new API();

//Listener
button.addEventListener("click", function () {
  newApi.obtenerApi();
  int.actualizaciones();
});
