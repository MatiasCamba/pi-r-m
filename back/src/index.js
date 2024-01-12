const http = require('http')
const getCharById = require('./controllers/getCharById')

const PORT = 3001;

http.createServer((req, res) => {
    console.log(`Solicitud recibida: ${req.url}`)
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req
    if (url.includes("/rickandmorty/character")) {
        const id = url.split('/').pop(); // split by / and erase last to get id number for character 
        
        getCharById(res,id)


    }


}).listen(PORT, "localhost")