//Clases
class API {
  constructor() { }

  async obtenerApi() {
    const accesKey =
      "4678e93db34df27f159242365eb35b46580b272517310b8213380954831a2fa9";
    const endPoint = "https://api.unsplash.com/search/photos";

    //Recogemos el valor del cuadro de busqueda
    let query = document.getElementById("buscar").value;

    //comprobamos que no esta vacio, si esta vacio la busqueda asignamos tech por defecto
    if (query == "") {
      query += "Tech";
    }

    const page = Math.floor(Math.random() * 10 + 1);

    //obtenemos el valor del campo cantidad, si se deja vacio es 10 por defecto
    let cantidad = document.getElementById('cantidad').value;
    if (cantidad == '') {
      cantidad += 10;
    }

    console.log(cantidad);
    const url = `${endPoint}?query=${query}&per_page=${cantidad}&page=${page}&client_id=${accesKey}`;

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
