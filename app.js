var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');
const ejs = require('ejs'); 
var name;

// set storage engine
const storage =multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req,file,cb){
  
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  
      
  }
  });
  // Init Upload 

    const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb)
    { checkFileType(file,cb);}
    }).single('myImage');
    function checkFileType(file,cb)
   {
     const filetypes = /jpeg|gif|jpg|png/;
     const extname =filetypes.test(path.extname(file.originalname).toLowerCase());
     if(extname)
      {
        return cb(null,true);
        }
    else{
    cb('Error: Images only');   
}
    }


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var alertRouter = require("./routes/alert");
var uploadRouter = require("./routes/upload");
var testuploadRouter = require("./routes/testupload");


var app = express();

app.set('view engine','ejs');
app.use(express.static('./public'));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/alert', alertRouter);
app.use('/upload', uploadRouter);
app.use('/testupload', testuploadRouter);


app.post('/upload', (req,res) =>{
    upload(req,res, (err) =>{
    if(err){
       res.render('index',{
       msg : err
    });
    }
    else{ 
    console.log(req.file); 
    if(req.file == undefined){
    res.render('index',{
    msg: 'Error: No file selected'
  });
  }
  else{
    console.log("helllo");  
    console.log(req.file.filename);
    name = req.file.filename;
    console.log(req.file.filename);
    console.log("helllo");  
    exports.name = name;
      res.render('index',{
          msg: 'File uploaded',
          file:`uploads/${req.file.filename}`,
          
          
      });
  }
    }
    });
    });
if(typeof ans === "undefined")
{
    console.log("hello");
}
else{
    exports.name = name;
}
module.exports = app;



