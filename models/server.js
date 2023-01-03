const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        
        // Paths
        this.itemsPath = '/api/items'

        // Conectar a base de datos

       

        // Middlewares

        this.middlewares();

        // Rutas de mi aplicación

        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        
        this.app.use(this.itemsPath, require('../routes/items'))
    }

    listen(){

        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en el puerto ', this.port);
        });
    }
}

module.exports = Server;