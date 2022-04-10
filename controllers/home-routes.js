// make a route the handlebars 
const {User, Event} = require ("../models")
const router = require('express').Router();



router.get('/', function(req, res){
    Event.findAll () .then(function(data) {
        res.render("homepage")
    }) .catch(function(err) {
        console.log(err)
        res.status(500).json(err)
    })
   
});

module.exports = router;