var path = require("path");
var router = require("express").Router();



    // This will get the home route.
    router.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/index.html"))
    })

    // This will get the notes page.
    router.get("/notes",function(req,res){
        res.sendFile(path.join(__dirname,"../public/notes.html"))
    })

    // This is the wildcard route.
    router.get("*",function(req,res){
        res.sendFile(path.join(__dirname,"../public/index.html"))
    })
module.exports = router;