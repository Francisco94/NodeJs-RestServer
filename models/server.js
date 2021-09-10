const express = require('express')
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/Api/Usuarios';
        
        //Middlewares - es una funcion que siempre se ejecutara cuando levantemos el server
        this.middlewares();
        //Rutas
        this.routes();

    }

    middlewares(){
        //Cors
        this.app.use(cors());

        //parseo y lectura de body
        this.app.use( express.json() );

        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo enpuerto', this.port);
        });
    }


}

module.exports = Server;