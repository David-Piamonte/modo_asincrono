// dependencia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest

//
function exito(data) {
    const tipos = JSON.parse(data).launchers
    //recorrer el areglo de tipos
    tipos.forEach(function(element) {
        console.log(`Tipo: ${element.id}`)
        console.log(`-------------------`)
    });
}
function fallo(status) {
    console.log(status)
}
const url = "https://isro.vercel.app/api/launchers"

//funcion para conectar a una api publica 
function get_data(endpoint , exito , fallo){
    //1. crear el objeto de conexion
    const h = new http()
    //2. abrir una conexion a la api
    h.open('GET' , endpoint)
    //3. enviar la request definida
    h.send()
    //4. una vez, recibida la response, tratar la informacion
    h.onload = function(){
        exito(h.responseText)
    }
    
}
//invocar get_data
get_data(url, exito, fallo)
