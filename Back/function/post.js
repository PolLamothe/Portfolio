

module.exports = function(app,fonction){
    const crypto = require('crypto');
    app.post("/login",async (req,res)=>{
        try{
            if(crypto.createHash('sha256').update(req.body.password).digest('hex') != await fonction.getPassword()){
                console.log("wrong password")
            }else{
                console.log("good password")
            }
        }catch(e){
            console.log(e)
            console.log(req.body)
        }
    })
}