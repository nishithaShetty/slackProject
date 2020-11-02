const Axios = require('axios');
var express = require('express');
var router = express.Router();
var io = require('../app');


/* GET home page. */
router.get('/', async function(req, res, next) {

    const slack = await Axios.post(`https://hooks.slack.com/services/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`, {
        "text": "Image Sent As an Attachment ",
    "blocks": [
    	{
    		"type": "section",
    		"text": {
    			"type": "mrkdwn",
    			"text": "Image successfully sent from API"
    		}
    	},
    	{
    		"type": "section",
    		"block_id": "section567",
    		"text": {
    			"type": "mrkdwn",
    			"text": "Image Uploaded!!!"
    		},
    		"accessory": {
    			"type": "image",
    			"image_url": "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg",
    			"alt_text": "Haunted hotel image"
    		}
    	},
    	
    ]
    });
    res.json({
      date : new Date().toISOString(),
      Message: "  message sent to slack",

    });
    
    
    
    
    
    
});

module.exports = router;
