var titulo1 = document.getElementById('titulo');
titulo1.textContent = '15 + Web Design Projects with Source code..!';

function cargarImagen(id, src, width, height) {
    var imagen = document.getElementById(id);
    if (imagen) {
        imagen.src = src;
        imagen.style.width = width;
        imagen.style.height = height;
    } else {

        imagen.alt = 'Imagen';
}
}

cargarImagen('img', 'https://ichef.bbci.co.uk/news/640/cpsprodpb/238D/production/_95410190_gettyimages-488144002.jpg', '350px', '300px');
cargarImagen('img1', 'https://ichef.bbci.co.uk/news/640/cpsprodpb/238D/production/_95410190_gettyimages-488144002.jpg', '350px', '300px');
cargarImagen('img2', 'https://ichef.bbci.co.uk/news/640/cpsprodpb/238D/production/_95410190_gettyimages-488144002.jpg', '350px', '300px');
cargarImagen('img3', 'https://ichef.bbci.co.uk/news/640/cpsprodpb/238D/production/_95410190_gettyimages-488144002.jpg', '350px', '300px');
cargarImagen('img4', 'https://ichef.bbci.co.uk/news/640/cpsprodpb/238D/production/_95410190_gettyimages-488144002.jpg', '350px', '300px');
cargarImagen('img5', 'https://ichef.bbci.co.uk/news/640/cpsprodpb/238D/production/_95410190_gettyimages-488144002.jpg', '350px', '300px');


function divs(id, contenido) {
    var div = document.getElementById(id);
    if (div) {
        div.innerHTML = contenido;
    } else {
        div.innerHTML = '';
    }
}

divs('div', "Field <span><button>Source code</button></span> <span><button>Preview demo</button></span>");
divs('div1', "Field <span><button>Source code</button></span> <span><button>Preview demo</button></span");
divs('div2', "Field <span><button>Source code</button></span> <span><button>Preview demo</button></span");
divs('div3', "Field <span><button>Source code</button></span> <span><button>Preview demo</button></span");
divs('div4', "Field <span><button>Source code</button></span> <span><button>Preview demo</button></span");
divs('div5', "Field <span><button>Source code</button></span> <span><button>Preview demo</button></span");
