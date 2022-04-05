const router = require('express').Router();

//const userRoutes = require('./user-routes.js');

//router.use('/users', userRoutes);
router.get('/', function(req, res){
    res.json({data: "HELLO WORLD"})
});

module.exports = router;