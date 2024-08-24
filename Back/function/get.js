module.exports = function(app,fonction){
    app.get("/checkToken",async (req,res)=>{
        try{
            if(req.cookies.token != await fonction.getToken()){
                res.status(401)
            }
            res.send()
        }catch(e){
            console.log(e)
        }      
    })
}