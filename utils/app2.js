const button = document.getElementById('button');

button.addEventListener('click', obtener);

function obtener() {

    var urls = [
        "https://images.pexels.com/photos/2092453/pexels-photo-2092453.jpeg",

    ];
    var nombre = "Zip_img";
    //The function is called
    compressed_img(urls, nombre);

    function compressed_img(urls, nombre) {
        var zip = new JSZip();
        var count = 0;
        var name = nombre + ".zip";
        urls.forEach(function (url) {
            JSZipUtils.getBinaryContent(url, function (err, data) {
                if (err) {
                    throw err;
                }
                zip.file(url, data, { binary: true });
                zip.folder("home/Jean/photos", `${url}.jpg`);
                count++;
                if (count == urls.length) {
                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                        saveAs(content, name);
                    });
                }
            });
        });
    }

}


