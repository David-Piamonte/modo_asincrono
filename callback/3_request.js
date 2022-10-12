const request = require('request')

const url = "https://pokeapi.co/api/v2/type"

const r = request(url, { json:true } , function(err, response, body)  {
    //se puede de dos formas 1).body -- 2).response.body.results con consola
    const tipos = response.body.results
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log(`-------------------`)
    });

}) 