//URL API.
//las constantes que nunca van a cambiar de valor se declaran con MAYUSCULA.
const API = "https://rickandmortyapi.com/api/character";


//obtener resultados de la API.
//Una funcion puede recibir un paremetro
//aqui se puede colocar cualquier nombre sobre el parametro
//el fetch trae una promesa , es decir 
//aqui se pasa la url , es la peticion
//si devuelve algo se usa el then
const getData = (url)=>{
    return fetch(url)
    //necesito un json
    .then((response)=> response.json())
    //con el json ubico los datos que necesito
    .then((json)=>{
        llenarDatos(json.results),paginacion(json.info),console.log(json.info);
    })
    //el error
    .catch((error)=>{
        console.log("Error" , error);
    });
}


//dibujar cards de personajes.
//aqui obtengo lo que saque de json.result
const llenarDatos = (data) =>{
    let html = "";
    //json con los personajes.
    //en pj queda guardado cada personaje
    data.forEach((pj) => {
           html += '<div class="col mt-5 prueba">'
           html += '<div class="card" style="width: 18rem;">';
           html += `<img class="card-img-top" src="${pj.image}" alt="${pj.name}">`;
           html += '<div class="card-body">';
           html += `<h5 class="card-title">${pj.name}</h5>`
           html += `<p class="card-text">${pj.status}</p>`
           html += `<p class="card-text">${pj.species}</p>`
           html += '</div>'
           html += '</div>'
           html += '</div>'
           //+= es lo mismo que html + ""

    });
    //el inner html.

    document.getElementById("datos_personajes").innerHTML=html;
}

//paginacion.

const paginacion = (data) => {
let prevDisabled = "";
let nextDisabled = "";
    //disabled es una propiedad de bootstrap
    (data.prev == null)?prevDisabled="disabled":prevDisabled="";

    (data.next == null)?nextDisabled="disabled":nextDisabled="";

    let html = "";

    html+=`<li class="page-item" ${prevDisabled} ><a class="page-link" onclick="getData('${data.prev}')">previues</a></li>`
    html+=`<li class="page-item" ${nextDisabled} ><a class="page-link" onclick="getData('${data.next}')">Next</a></li>`

    document.getElementById("paginacion").innerHTML=html;
}


//fetch permite consumir los valores.

//se ejecuta la api.
//se envia la url como paramero.
//de esta manera se envia.
getData(API);
