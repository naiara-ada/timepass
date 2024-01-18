const express = require('express');
const endrouteRouter = express.Router();

endrouteRouter.get('/', (req, res)=>{
    console.log('res.ok en endroute', res.ok)
    if(res.ok){
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EndRoute</title>
    </head>
    <body>
        <h1> Ruta Final</h1>
        <h2>Bienvenido a la ruta final!</h2>
    </body>
    </html>`)
    }else{
        res.send(`        
            <h1> Bienvenido</h1>
            <h2>Aún no es la hora, espera hasta las 12:00 para entrar</h2>
            <a href="/endroute"> Entrar </a>
       `)
    }
})



module.exports = endrouteRouter;