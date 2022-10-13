const needle = require('needle')

const url = "https://strangerthings-quotes.vercel.app/api/quotes/"


const f =async () =>{
    try {
        let response = await needle('get', url)
        const tipos = response.body
        tipos.forEach((element) =>{
            console.log(element.author)
            console.log(`-------------------`)
        });
    } catch (error) {
        console.log(Error(`Error : $error`))
    }
}

f()
    

