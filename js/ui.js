class Interfaz {
	async miR(resultado) {
		let imagen = ``;
		if (resultado.results.length == 0) {
			imagen += `<div class="alert alert-danger" role="alert">
                    <h3>Lo sentimos!!!, no hay resultados con este criterio de búsqueda</h3>
                    <p>Intentalo de nuevo</p>
                </div>
                            
                `;
		} else {
			resultado.results.forEach(element => {
				console.log(element);
				imagen += `
                      <div class="col-lg-4 col-md-6 col-12 item-imag">
                          <div class="content" style="background-image:url(${element.urls.regular});">
                          </div>

                          <div class="info">
                              <h3><strong>Fotógrafo :</strong> ${element.user.name}</h3>
							  <a class="descargar" download="${element.id}.jpg" href="https://unsplash.com/photos/${element.id}/download?force=true" target="_blank">Descargar</a>
                          </div>
                      </div>
                  `;
			});
		}
		//pintamos el resultado
		document.getElementById("contenido").innerHTML = imagen;
	}

	//Actualizaciones
	actualizaciones() {
		setTimeout(() => {
			mensaje.remove();
		}, 3500);
	}
}
