//connects all of the api 


const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const calendarRoutes = require('./calendar-routes.js');
router.use('/users', userRoutes);
router.use('/calendar', calendarRoutes);

const eventRoutes = require('./event-routes.js');

router.use('/events', eventRoutes);

//router.get('/', function(req, res){
   // res.json({data: "HELLO WORLD"})
//});

module.exports = router;