const { response } = require('express');



  const usuariosGet = (req, res = response) => {

    res.json({
        mensaje:'Mi primer api rest en node js, di que estas orgulloso de mi xD',
        postada: 'Ya que sea nodejs SR dame trabajo',
        tecnologias: 'node js, Heroku, ya me esta gustando xD'
    });
  };


  const usuariosPost = (req, res = response) => {
      const {nombre, edad} = req.body;
    
    res.status.json({
       msg:'postApi - Controlador',
       nombre,
       edad
    });
  };

  
  const usuariosPut = (req, res) => {
    
    const { id } = req.params;
    
    res.json({
        msg:'putApi - Controlador',
        id
    });
  };

  const usuariosPatch = (req, res = response) => {
    res.json({
        msg:'patchApi - Controlador'
    });
  };

  const usuariosDelete = (req, res = response) => {
      res.json({
          msg:'deleteApi - Controlador'
      });
  };
  



  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosPatch,
      usuariosDelete
  }