const express = require('express');
const session = require('express-session');
const router = express.Router();
const {checkisauthenticated} = require("../config/auth")

router.get("/",checkisauthenticated,(request,response)=> {console.log (request.session.id); response.render("index",{user: request.body.username})});
module.exports = router;

