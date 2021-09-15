//404 Not found error handler
const notFoundHandler = (req, res, next)=>{
    next(createError(404, "Your Request Content was not FOund"));
}

//Common Error Handler
const errorHandler = (err, req, res, next)=>{
    
    res.status(err.static || 500);

    if(res.locals.html){
        res.set("html respon");
    }else{
        res.json( {
            meessage: err.message
        })
    }
}

module.exports={
    notFoundHandler,
    errorHandler
}