const express = require ("express")
const HTMLroutes = require ("./routes/htmlRoute") 
const APIroutes = require ("./routes/apiRoute")

const app = express();
const PORT = process.env.PORT || 3001;



//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(express.static('public'));
app.use("/api/notes", APIroutes);
app.use('/', HTMLroutes);


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));




