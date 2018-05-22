const mongoose = require('mongoose'),
Pet = mongoose.model('Pet');
module.exports = {
    index: function(req, res){
        Pet.find({}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },
    show: function(req, res){
        Pet.find({_id: req.params.id}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },
    create: function(req, res){
        Pet.create(req.body, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },
    update: function(req, res){
        Pet.update({_id: req.params.id}, {$set: req.body}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },
    destroy: function(req, res){
        Pet.remove({_id: req.params.id}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data})
            }
        })
    }
}