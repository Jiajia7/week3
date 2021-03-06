var express = require('express');
var router = express.Router();

var urlService = require('../services/urlService');

router.get('*', function(req, res){
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlService.getLongUrl(shortUrl, function(url){
        if(url){
            res.redirect(url.longUrl);
        }else{
            res.sendfile('./public/views/404.html');
        }


    });
});

module.exports = router;