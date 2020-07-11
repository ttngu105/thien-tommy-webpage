const express = require('express');
const session = require('express-session');
const router = express.Router();
const {checkisauthenticated,isthisuser} = require("../config/auth")

router.get("/",(request,response)=> {response.render("index")});
module.exports = router;

