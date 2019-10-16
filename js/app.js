const button = document.getElementById("button");
var miInit = {
  method: "GET",
  headers: {
    Authorization: "563492ad6f9170000100000117c9d140699c468fbb2353b137bcec85"
  },
  mode: "cors",
  cache: "default"
};

var unSplashMiInit = {
  method: "GET",
  headers: {
    Authorization: "563492ad6f9170000100000117c9d140699c468fbb2353b137bcec85"
  },
  mode: "cors",
  cache: "default"
};

button.addEventListener("click", obtenerImagenes);

function obtener() {
  let api =
    "https://api.pexels.com/v1/search?query=people+query&per_page=10&page=2";
  let values;
  fetch(api, miInit)
    .then(response => response.json())
    .then(resultado => {
      values = resultado.photos;
      let image = ``;
      values.forEach(element => {
        url = element.src.medium;

        image += `
                    <div class="col-lg-4 item-imag">
                        <div class="content" style="background-image:url(${element.src.medium});">
                        </div>
                        
                        <div class="info">
                            <h3>Fotógrafo : ${element.photographer}</h3>
                            <a download="custom-filename.jpg" href="https://images.pexels.com/photos/2932278/pexels-photo-2932278.jpeg" title="ImageName" target="_blank>
                                <img alt="ImageName" src="/path/to/image">
                            </a>
                        </div>
                        
                    </div>
                `;

        document.getElementById("contenido").innerHTML = image;
      });
    });
}

function obtener2() {
  const accesKey =
    "4678e93db34df27f159242365eb35b46580b272517310b8213380954831a2fa9";
  const endPoint = "https://api.unsplash.com/search/photos";

  const url = `${endPoint}?query=dogs?page=1&client_id=${accesKey}`;
}

async function obtenerImagenes() {
  const accesKey =
    "4678e93db34df27f159242365eb35b46580b272517310b8213380954831a2fa9";
  const endPoint = "https://api.unsplash.com/search/photos";

  const url = `${endPoint}?query=dogs?page=1&client_id=${accesKey}`;

  const as = await fetch(url);
  const resultado = await as.json();

  let imagen = ``;

  resultado.results.forEach(element => {
    const otra = `${element.download_location}/?client_id=${accesKey}`;

    https: imagen += `
                    <div class="col-lg-4 col-md-6 col-12 item-imag">
                        <div class="content" style="background-image:url(${element.urls.regular});">
                        </div>                     
                                           
                        <div class="info">
                            <h3><strong>Fotógrafo :</strong> ${element.user.name}</h3>
                            <a class="descargar" download="${element.id}.jpg" href="https://unsplash.com/photos/${element.id}/download?force=true" target="_blank">Descargar</a>                            
                        </div>
                    </div>
                `;

    document.getElementById("contenido").innerHTML = imagen;
  });
}

function showMessage() {
  setTimeout(() => {
    document.querySelector(".mensaje").remove();
  }, 3500);
}
showMessage();
