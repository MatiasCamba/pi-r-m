const axios = require('axios')

const getCharById = (res, id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-matiascamba`)
        .then(({ data }) => {
            const {name,gender,species,image,status,origin} = data; // id lo recibo por parametro
            const characters = {id,name,gender,species,image,status,origin};
 /*        const characters = {
            id : data.id,
            name : data.name,
            gender: data.gender,
            species: data.species,
            image : data.image,
            status: data.status,
            origin : data.origin,
        } */

            res.writeHead(200, { "Content-Type": "application/json" })
            return res.end(JSON.stringify(characters))
        })
        .catch((err) => {
            res.writeHead(500, { "Content-Type": "text/plain" })
            return res.end(err.message)
        })

}



module.exports = getCharById;