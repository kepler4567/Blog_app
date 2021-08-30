

// Carregando pacotes
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const admin = require("./Routers/admin");
const path = require("path");
//const mongoose = require('mongoose');

//configurações

    //Body parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //Handlebars
    app.engine('handlebars', handlebars({defautLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Mongoose

    //public
    app.use(express.static(path.join(__dirname, "public")));

//Rotas
app.use('/admin', admin);


//Outros
const port = 8081;
app.listen(port,() =>{
    console.log("servidor rodando");
}
)