const axios = require('axios')

const url = "https://isro.vercel.app/api/customer_satellites"

//configuracion request
let config = {
    url : url,
    method: 'get'
}
//realizar operacion asincrona
axios(config)
    .then(function(response){
        return response.data.customer_satellites
    }).then(function(data){
        data.forEach(function(tipo) {
            console.log(`Tipo: ${tipo.id}`)
            console.log(`------------------`)
        });(data)
    })
    .catch(function(error){
        console.log(Error(`Error : $error`))
    })