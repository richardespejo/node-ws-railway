const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//Servir contenido dinamico con HBS
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

app.get('/', function( req, res) {
    res.render('home', {
        nombre: 'Richard Espejo',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function( req, res) {
    res.render('generic', {
        nombre: 'Richard Espejo',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', function( req, res) {
    res.render('elements', {
        nombre: 'Richard Espejo',
        titulo: 'Curso de Node'
    });
});

//Servir contenido estatico
app.use( express.static('public'));
/*
app.get('/', function( req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/generic_static', function( req, res) {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements_static', function( req, res) {
    res.sendFile(__dirname + '/public/elements.html');
});
*/

app.get('*', function( req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Se escucha por el puerto: ${port}`);
});