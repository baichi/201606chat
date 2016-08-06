var express = require('express');
var Models = require('../db');
var router = express.Router();
router.get('/list',function(req,res){
    Models.Room.find({},function(err,rooms){
        if(err){
            res.sendStatus(500).send(err);
        }else{
            res.send(rooms);
        }
    })
});

router.post('/add',function(req,res){
    var room = req.body;
    Models.Room.create(room,function(err,room){
        if(err){
            res.sendStatus(500).send(err);
        }else{
            res.send(room);
        }
    })
})

module.exports = router;
