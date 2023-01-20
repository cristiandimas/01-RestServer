const express = require('express')

//1. Creamos una clase

class Server {

  constructor(){
    this.app = express();
    this.port = 3000;
    this.routes();
  }

  //RUTAS
  routes(){
    this.app.get('/', (req, res) =>{
      res.send('Hello World')
    })

    this.app.get('/series', (req,res) =>{
      res.send('serie1: El Mentalista, serie2: Naruto Shippuden, serie3: Dr. House')
    })
  }

  //METODO PARA ESCUCHAR LAS SOLICITUDES POR EL PUERTO
  listen(){
    this.app.listen(this.port, () => {
        console.log('Server is running on port', this.port);
    })
  }
}

//2. Exportamos el servidor
module.exports = Server