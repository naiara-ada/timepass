const validateTime = (req, res, next)=> {
    if(req.url == '/'){
        if (req.rightnow <= '23:59' && req.rightnow >= '12:00'){
            res.ok = true;
         }else{
             res.locals.mensaje = 'Aún no es la hora, espera hasta las 12:00 para entrar'; 
             res.ok = false;
             //return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
            // return res.redirect('/');            
         }
    }   
    next();
}
module.exports = validateTime;