const express = require('express');
exports.checkisauthenticated  = function(request,response,next){
    if (request.isAuthenticated()){
        return next();
    }
    response.redirect('/users/login')
}
exports.checkisnotauthenticated  = function(request,response,next){
    if (request.isAuthenticated()){
        response.redirect('/')
    }
    return next();
}