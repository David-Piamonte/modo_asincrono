const needle = require('needle')

const url = "https://pokeapi.co/api/v2/type"

needle('get' , url)
    .then (response => response.data.results)
    .then(data => {
        data.forEach(function(tipo) {
            console.log(`Tipo: ${tipo.name}`)
            console.log(`------------------`)
        })
    })
    .catch()
    

