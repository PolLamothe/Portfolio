

module.exports = function(app,fonction){
    const crypto = require('crypto');
    app.post("/login",async (req,res)=>{
        try{
            if(crypto.createHash('sha256').update(req.body.password).digest('hex') != await fonction.getPassword()){
                res.status(401)
                res.send()
            }else{
                res.send(await fonction.getToken())
            }
        }catch(e){
            console.log(e)
        }
    })
}