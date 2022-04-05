// make a route the handlebars 

const router = require('express').Router();



router.get('/', function(req, res){
    
    res.send("it works")
});

module.exports = router;