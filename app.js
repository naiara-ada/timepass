const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js');
const endrouteRouter = require('./routes/endroute.js');
const getTime = require('./middlewares/horaMiddleware.js');
const validateTime = require('./middlewares/validarHora.js')

app.use(getTime);
//app.use(validateTime);
app.use('/', indexRouter);
app.use('/endroute', validateTime, endrouteRouter);


app.listen(3000, (req, res)=>{
    console.log('node listening on http://localhost:3000');
})