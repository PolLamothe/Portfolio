module.exports = function(app,fonction,converter){
    app.get("/checkToken",async (req,res)=>{
        try{
            if(req.cookies.token != await fonction.getToken()){
                res.status(401)
            }
            res.send()
        }catch(e){
            console.log(e)
            res.status(500)
            res.send()
        }      
    })
    app.get("/getAllPostsID",async (req,res)=>{
        try{
            res.send(await fonction.getAllPostsID())
        }catch(e){
            console.log(e)
            res.status(500)
            res.send()
        }
    })
    app.get("/getPostData/:ID",async (req,res)=>{
        try{
            res.send(await fonction.getPostsData(req.params["ID"]))
        }catch(e){
            res.status(500)
            res.send()
            console.log(e)
        }
    })
    app.get("/getPostContent/:ID",async (req,res)=>{
        try{
            res.send(converter.makeHtml((await fonction.getPostsData(req.params["ID"])).content))
        }catch(e){
            res.status(500)
            res.send()
            console.log(e)
        }
    })
}