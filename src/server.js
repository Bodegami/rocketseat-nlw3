//importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//iniciando o express
const server = express()

server
    //utilizando os arquivos estáticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //Rotas da aplicação
    .get('/', pages.index) 
    .get('/orphanage', pages.orphanage) 
    .get('/orphanages', pages.orphanages) 
    .get('/create-orphanage', pages.createOrphanage) 
    .get('/', pages.index) 
        
        
        
        
        //const name = 'Renato'
        //return response.render('index', {name: name})
        
        //return response.sendFile(path.join(__dirname, 'views', 'index.html'))



//ligar o servidor
server.listen(5500);