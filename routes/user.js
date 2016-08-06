var express = require('express');
var Models = require('../db');
var router = express.Router();
//提供用户登陆
router.post('/login',function(req,res){
  //查一个数据库中有没有此邮箱，有则登陆成功，没有则保存并登陆成功
    var user = {email:req.body.email};
    Models.User.findOne(user,function(err,doc){
        if(err){
            res.send(err);
        }else{
            if(doc){//数据库中已经有此邮箱
                res.send(doc);
            }else{
                user.avatar="https://secure.gravatar.com/avatar/"+md5(user.email)+"?s=32";
                Models.User.create(user,function(err,doc){
                    res.send(user);
                })
            }
        }
    })
})
function md5(str){
    return require('crypto').createHash('md5').update(str).digest('hex');
}
module.exports = router;