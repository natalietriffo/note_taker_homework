var dbNote = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const router = require('express').Router();
const fs = require("fs");





// API get request for note data
router.get("/", (req, res) => {
    res.json(JSON.parse(fs.readFileSync(dbNote, "utf8")))
})

// API post request to add note Data
router.post("/", (req, res) => {
    // res.json(dbNote)

    //what the note consists of 
    const { title, text, id } = req.body

    //if title and text are present 
    // then post the new note
    if (title && text) {

        //creating new obj of what makes up the new note
        const newNote = {
            title, text, id: uuidv4()
        }
        console.log(newNote)
        // we recieve an onj back and we need to stringify it 
        var notebook = JSON.stringify(newNote)

        //reading contents of db.json file
        fs.readFile(dbNote, "utf8", (err, notebook) => {
            if (err) {
                console.log("err on read file" + err)
            }
            console.log("success")
        })

        //parsing the note book var to the note collection variable 
        var noteCollection = JSON.parse(notebook);
        noteCollection.push(newNote);

        //writing to db.json file
        fs.writeFile(dbNote, JSON.stringify(noteCollection), function (err) {
            if (err) {
                console.log("err on write file" + err)
            }
            res.json("Note has been saved.")
        })

        res.json(noteCollection)
    }



})

module.exports = router;