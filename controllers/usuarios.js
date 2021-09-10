const { response } = require('express');



  const usuariosGet = (req, res = response) => {

    res.json({
        msg:'getApi - controlador'
    });
  };


  const usuariosPost = (req, res = response) => {
      const {nombre, edad} = req.body;
    
    res.status.json({
       msg:'postApi - Controlador',
       nombre,
       edad
    });
  }

  
  const usuariosPut = (req, res) => {
    
    const { id } = req.params;
    
    res.json({
        msg:'putApi - Controlador',
        id
    });
  }

  const usuariosPatch = (req, res = response) => {
    res.json({
        msg:'patchApi - Controlador'
    });
  }

  const usuariosDelete = (req, res = response) => {
      res.json({
          msg:'deleteApi - Controlador'
      });
  }
  



  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosPatch,
      usuariosDelete
  }