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

cargarImagen('img', 'https://ca-times.brightspotcdn.com/dims4/default/da06139/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F52%2Fad%2F65a1ea8a41718ef56032d9e14302%2Fdisney-with-studio-tag-copy.jpg', '350px', '300px');
cargarImagen('img1', 'https://static-assets.bamgrid.com/product/starplus/images/share-default.d72cf588f6d06cba22171f5ae44289d3.png', '350px', '300px');
cargarImagen('img2', 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/2JA7URADWJDW7LWZQNZJNHG3PA.png', '350px', '300px');
cargarImagen('img3', 'https://i.blogs.es/d4febd/paramount/450_1000.webp', '350px', '300px');
cargarImagen('img4', 'https://yt3.googleusercontent.com/pn_3JEt2nFaRA6dY08NzFM2w8A7NtUbaniamEnObxtLX3ZhT9w41KW0W0pjl-RiczGS0rgzZ=s900-c-k-c0x00ffffff-no-rj', '350px', '300px');
cargarImagen('img5', 'https://img.asmedia.epimg.net/resizer/4RsGxVvWp3h6-t9q3AM31tayO9M=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/4CZOEZ7ESVPNHIH5KPDR2XCNB4.jpg', '350px', '300px');


function divs(id, contenido) {
    var div = document.getElementById(id);
    if (div) {
        div.innerHTML = contenido;
    } else {
        div.innerHTML = '';
    }
}

divs('div', "Field  <span><button>Source code</button></span> <span><button>Preview demo</button></span>");
divs('div1', "Field  <span><button>Source code</button></span> <span><button>Preview demo</button></span");
divs('div2', "Field  <span><button>Source code</button></span> <span><button>Preview demo</button></span");
divs('div3', "Field  <span><button>Source code</button></span> <span><button>Preview demo</button></span");
divs('div4', "Field  <span><button>Source code</button></span> <span><button>Preview demo</button></span");
divs('div5', "Field  <span><button>Source code</button></span> <span><button>Preview demo</button></span");
