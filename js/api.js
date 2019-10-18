//Clases
class API {
  constructor() {}

  async obtenerApi() {
    const accesKey =
      "4678e93db34df27f159242365eb35b46580b272517310b8213380954831a2fa9";
    const endPoint = "https://api.unsplash.com/search/photos";

    let query = document.getElementById("buscar").value;

    //comprobamos que no esta vacio, si esta vacio la busqueda asignamos tech por defecto
    if (query == "") {
      query += "Tech";
    }

    const page = Math.floor(Math.random() * 10 + 1);
    const url = `${endPoint}?query=${query}&page=${page}&client_id=${accesKey}`;

    // const as = await fetch(url);
    const as = await fetch(url);

    const resultado = await as.json();

    int.miR(resultado);
  }

  // End of API
}

// function showMessage() {
//     setTimeout(() => {
//         document.querySelector(".mensaje").remove();
//     }, 3500);
// }
// showMessage();
