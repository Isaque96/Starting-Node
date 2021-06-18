// import moduloA from '../../ModuloA'; -> Esse é o novo jeito de Import
const moduloA = require('../../ModuloA');
console.log(moduloA.ola);

const saudacao = require('saudacao');
console.log(saudacao.ola);

const c = require('./PastaC'); // Não precisa importar o arquivo pois ele reconhece o INDEX
console.log(c.ola2);

const http = require('http');
http.createServer((req, res) => {
    res.write("Bom dia!");
    res.end();
}).listen(8080);