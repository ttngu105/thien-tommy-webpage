const express = require('express');
const router = express.Router();
const path = require("path");
const webpage = "";
const {checkisauthenticated,isthisuser} = require("../config/auth")
router.use('/coding',checkisauthenticated,isthisuser,(request,response)=>{response.render("coding")})
module.exports = router;