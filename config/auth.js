const express = require('express');
const User = require("../models/User");
const session = require('express-session');
const flash = require('connect-flash');
insession = {};
exports.checkisauthenticated  = function(request,response,next){
    if (request.isAuthenticated()){
        return next();
    }
    response.redirect('/users/login')
}
exports.checkisnotauthenticated  = function(request,response,next){
    if (request.isAuthenticated()){
        response.redirect('/users/login')
    }
    return next();
}
exports.isthisuser = function(request,response,next){
    //find user
    thisSession = request.session.id
    User.findOne({username:insession[thisSession]},function(error,user){
        if(request.session.id == user.sessionid){
            return next();
        }
        else{
            response.redirect("users/login")
        }
    })
}