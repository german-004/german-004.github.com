const request = require('request');

request('http://www.google.com',function(){
    conseole.log('Termine la peticion de Google');
});

console.log('Yo voy despues, en el codigode la peticion a Google');