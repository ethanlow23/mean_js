const path = require('path');
const pets = require('../controllers/pets.js');
module.exports = function(app){
    app.get('/index', function(req, res){
        pets.index(req, res);
    });
    app.get('/show/:id', function(req, res){
        pets.show(req, res);
    });
    app.post('/create', function(req, res){
        pets.create(req, res);
    });
    app.put('/edit/:id', function(req, res){
        pets.update(req, res);
    });
    app.delete('/destroy/:id', function(req, res){
        pets.destroy(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angular-app/dist/angular-app/index.html"));
    });
}