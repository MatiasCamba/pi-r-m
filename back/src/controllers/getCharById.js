const axios = require('axios')



const getCharById = (req, res) => {
     const id = Number(req.params.id)
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-matiascamba`)
        .then(({ data }) => {
            const { name, gender, species, image, status, origin } = data; // id lo recibo por parametro
            const characters = { id, name, gender, species, image, status, origin };
            /*        const characters = {
                       id : data.id,
                       name : data.name,
                       gender: data.gender,
                       species: data.species,
                       image : data.image,
                       status: data.status,
                       origin : data.origin,
                   } */
            if (characters) {
                return res.status(200).json(characters)
            } else {
                return res.status(404).json("No se encontro personaje!")
            }

        })
        .catch((error) => {
            return res.status(500).send({ error: error.message })
        })

}



module.exports = getCharById;