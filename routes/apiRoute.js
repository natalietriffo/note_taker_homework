var path = require("path")
var dbNote = require("../db/db.json")
const {
    v4: uuidv4
} = require("uuid")
const { json } = require("express")
const { fstat } = require("fs")
module.exports = function(app){
    // API get request for note data
app.get("/api/notes",function(req,res){
    res.json(dbNote)
})
    // API post request to add note Data
    app.get("/api/notes",function(req,res){
        // res.json(dbNote)
        req.body.id = uuid4()
        dbNote.push(req.body)
        fs.writeFile("../db/db.json",JSON.stringify(dbNote),function(err){
            if(err){
                throw err
            }
            res.json("Note has been saved.")
        })
    })
}