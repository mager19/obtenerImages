//Variables
const button = document.getElementById("button");

const int = new Interfaz();
const newApi = new API(
  "4678e93db34df27f159242365eb35b46580b272517310b8213380954831a2fa9"
);

//Listener
button.addEventListener("click", function() {
  newApi.obtenerApi();
});
