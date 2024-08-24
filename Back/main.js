const express = require("express")
const bodyParser = require('body-parser')//module qui sert a traiter les données json
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors(corsOptions));
app.use(cookieParser());

const fonction = require("./function/function.js")

require("./function/get.js")(app,fonction)
require("./function/post.js")(app,fonction)

app.listen(3000)