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

module.exports = router;
