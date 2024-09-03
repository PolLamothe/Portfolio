const { error } = require('console');


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
            res.status(500)
            res.send()
        }
    })
    app.post("/createPost",async(req,res)=>{
        try{
            if(req.cookies.token == await fonction.getToken()){
                if(req.body.title == undefined || req.body.title == "" || req.body.content == undefined || req.body.content == ""){
                    throw error("empty input")
                }
                await fonction.createNewPost(req.body.title,req.body.content)
                res.send()
            }
        }catch(e){
            console.log(e)
            res.status(500)
            res.send()
        }
    })
    app.post("/deletePost/:ID",async (req,res)=>{
        try{
            if(req.cookies.token == await fonction.getToken()){
                await fonction.deletePost(req.params.ID)
                res.send()
            }else{
                res.status(401)
                res.send()
            }
        }catch(e){
            console.log(e)
            res.status(500)
            res.send()
        }
    })
}