const express = require('express');
const router = express.Router();
const path = require("path")
const {isthisuser} = require('../config/auth')
router.use('/coding',isthisuser,(request,response)=>{response.render("coding")})
router.use('/crypto',isthisuser,(request,response)=>{response.render("crypto")})
router.use('/digital',isthisuser,(request,response)=>{cresponse.render("digital")})
module.exports = router;