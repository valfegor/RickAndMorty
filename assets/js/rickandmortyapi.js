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
        llenarDatos(json.resuls),paginacion(json.info);
    })
    //el error
    .catch((error)=>{
        console.log("Error" , error);
    });
}


//dibujar cards de personajes.
//aqui obtengo lo que saque de json.result
const llenarDatos = (data) =>{
    
}

//paginacion.

const paginacion = () => {

}


//fetch permite consumir los valores.

//se ejecuta la api.
//se envia la url como paramero.
//de esta manera se envia.
getData(API);