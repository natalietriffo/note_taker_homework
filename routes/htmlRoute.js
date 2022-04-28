var path = require("path");
module.exports = function(app){
    // This will get the home route.
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/index.html"))
    })

    // This will get the notes page.
    app.get("/notes",function(req,res){
        res.sendFile(path.join(__dirname,"../public/notes.html"))
    })

    // This is the wildcard route.
    app.get("*",function(req,res){
        res.sendFile(path.join(__dirname,"../public/index.html"))
    })
}