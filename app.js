const express = require('express');
const layout = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
require("./config/passport")(passport);
const cors = require('cors');
const port = process.env.PORT;
const bodyParser = require("body-parser");
const sessionConfig  =   { secret: "secret" ,   
                            resave: false ,   
                            saveUninitialized: true,
                            cookie:{},
                        }; 
const User = require('./models/User');
app.use (session( sessionConfig ) ) 
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/blogs'));
//db config
const url = require('./config/keys').MongoURI;
//use cors
app.use(cors());

//connect to mongoDB
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true })
//try to see if im an connected the database
mongoose.connection.on('connected', function(){console.log("MongoDB connected..................................")});
mongoose.connection.on('error', function(){console.log('i am not connected')});
mongoose.connection.on('disconnected', function(){console.log('i have disconnected')});
//body parser
app.use(express.urlencoded({extended:false}))
//Express session
//passport
app.use(passport.initialize());
app.use(passport.session());
// flash
app.use(flash());
//global variables
app.use((request,response,next)=>{
    response.locals.success_msg = request.flash('success_msg');
    response.locals.error_msg = request.flash('error_msg');
    response.locals.error = request.flash('error');
    response.locals.username = insession[request.session.id];
    next();
});
//routes
app.use('/users',require("./routes/users"))
app.use(layout)
app.use(express.static(__dirname));
app.set('view engine',"ejs")
app.use('/',require("./routes/index"));
app.use('/blogs',require('./routes/blogs'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//render html documents
//function Index(request,response){
	//response.sendFile("index.html");
//}
console.log(`Server is running on port ${port}..................`);
app.listen(process.env.PORT || 3000);
