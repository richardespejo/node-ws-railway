
const http = require('http');

http.createServer( (req , res) => {

    //Archivo JSON
    /*
    res.writeHead(200, {'Content-type': 'application/json'})
    const persona = {
        id:1,
        nombre:'Richard'
    }
    res.write(JSON.stringify( persona));
    */

    //Archivo CSV
    /*
    res.setHeader('Content-Disposition','attachment; filenam=lista.csv');
    res.writeHead(200 , { 'Content-Type' : 'application/csv'});
    res.write('id, nombre\n');
    res.write('1, Richard\n');
    res.write('2, Alixander\n');
    res.write('3, Kristhian\n');
    res.write('4, Kissy\n');
    res.write('5, Ian\n');
    */

    res.write('Hola mundo');

    res.end();
})
.listen( 8080 );

console.log('Escuchando en puerto: ', 8080);