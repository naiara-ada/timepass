const express = require('express');
const validateTime = require('../middlewares/validarHora');
const indexRouter = express.Router();

indexRouter.get('/', (req, res)=>{
    res.send(`    
        <h1> Bienvenido</h1>
        <p> la hora actual es : ${req.rightnow}</p>
        <a href="/endroute"> Entrar </a>
    `)
})

module.exports = indexRouter;

