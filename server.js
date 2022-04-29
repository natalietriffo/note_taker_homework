const express = require ("express")
const HTMLroutes = require ("./routes/htmlRoute") 
const APIroutes = require ("./routes/apiRoute")

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', HTMLroutes);
app.use("/api/notes", APIroutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));




