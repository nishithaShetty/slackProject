var express = require('express');
var router = express.Router();
var Slack = require('node-slack-upload');
//var slack = new Slack("xoxb-1427016874099-1429981202803-edO3xPizV846tIiYFdXsw7sq");
var fs = require('fs');
var path = require('path');
var request = require('request');
var count = require('../app.js');
var ans= JSON.stringify(count.name);

router.get('/', function(req, res, next) {
  
console.log(count.name);  
console.log(typeof count.name);  


  request.post({
      url: 'https://slack.com/api/files.upload',
      formData: {
          token: 'xoxb-1427016874099-1429981202803-edO3xPizV846tIiYFdXsw7sq',
          title: "Image",
          filename: "background.jpg",
          filetype: "auto",
          channels: 'general',
          file: fs.createReadStream(path.join(__dirname, '../public/uploads', count.name)),
      
      },
  }, function (err, response) {
    if (err) {
      console.error(err);
    }
    else {
      console.log('Uploaded file details: ', response);

    }
  });
  
  res.json({
    date : new Date().toISOString(),
    Message: "  message sent to slack",

  });

});
module.exports = router;
