const orphanages = require('./database/fakedata.js');

module.exports = {

    index(request, response) {
        return response.render('index')
        //const city = request.query.city
        //return response.render('index', { city })
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    orphanages(req, res) {
        return res.render('orphanages', { orphanages})
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    },
    
}