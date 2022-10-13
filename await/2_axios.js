const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//configuracion request
let config = {
    url : url,
    method: 'get'
}

const f =async () =>{
    try {
        let response = await axios(config)
        const tipos = response.data.results
        tipos.forEach(function(element) {
            console.log(`Tipo: ${element.name}`)
            console.log(`-------------------`)
        });
    } catch (error) {
        console.log(Error(`Error : $error`))
    }
}

function exito(data) {
    const tipos = JSON.parse(data).results
    //recorrer el areglo de tipos
    tipos.forEach(function(element) {
        console.log(`Tipo: ${element.name}`)
        console.log(`-------------------`)
    });
}
f()
