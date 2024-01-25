const express = require('express');

const server =  express();

const cors = require('cors')

const router = require('./routes/index.js')



const PORT = 3001;

const morgan = require('morgan')


server.use(morgan('dev'));

/* server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 }); */  
 
 server.use(cors());

server.use(express.json());

server.use('/rickandmorty',router)


server.listen(PORT,()=>{
    console.log(`Server raised on PORT: ${PORT}`)
})

