const User = require('./User');
const Event = require('./Event');
// this connets the user with the events in the calender 

 User.belongsTo (Event, {
     foreignKey:'user_id'
 })
// this allows a single user to connect with an event 
Event.hasOne (User, {
    foreignKey:'user_id'
})
// need to have a user save an event
//need a user to erase an event 


// this allows to export 2 events (user and events)
module.exports = { User, Event };

