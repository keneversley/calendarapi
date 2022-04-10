const router = require('express').Router();
const fetch = require('node-fetch');
const { User } = require('../../models');




//START UPDATE CALENDAR API CALL
//EXAMPLE:
//PUT
//http://localhost:3001/api/calendar/3bt0gsh5fsfg5ii8sjw6ajibh
                                    //^ this is the calendar ID

router.put('/:id', (req, res) => {
  //start sending UPDATE calendar PUT API request to nylas
  const api_body = { name: req.body.name, description: req.body.description, location: req.body.location,timezone:req.body.timezone };
  const response = fetch('https://api.nylas.com/calendars/'+req.params.id, {
    method: "PUT",
    headers: {
      'Authorization': 'Bearer v4c3qoJ3xEnNgP2PbuJi3gU5cmqbbA',
      'Content-Type': 'application/json',
      'cache-control': 'no-cache'
    },
    body: JSON.stringify(api_body),
  }).then((res) => res.json()).then((data) => res.status(200).json({ response: data }));
  //end sending UPDATE calendar PUT API request to nylas
});
//END UPDATE CALENDAR API CALL



//START DELETE CALENDAR API CALL
//EXAMPLE:
//DELETE
//http://localhost:3001/api/calendar/3bt0gsh5fsfg5ii8sjw6ajibh
                                      //^ this is the calendar ID
router.delete('/:id', (req, res) => {
  //start sending delete calendar DELETE API request to nylas
  const response = fetch('https://api.nylas.com/calendars/'+req.params.id, {
    method: "DELETE",
    headers: {
      'Authorization': 'Bearer v4c3qoJ3xEnNgP2PbuJi3gU5cmqbbA',
      'Content-Type': 'application/json',
      'cache-control': 'no-cache'
    },
  }).then((res) => res.json()).then((data) => res.status(200).json({ response: data }));
  //end sending delete calendar DELETE API request to nylas
});
//END DELETE CALENDAR API CALL



//START CREATE CALENDAR API CALL
//EXAMPLE:
//POST
//http://localhost:3001/api/calendar/create

router.post('/create', (req, res) => {
  //start sending create calendar POST API request to nylas
  const api_body = { name: req.body.name, description: req.body.description, location: req.body.location,timezone:req.body.timezone };
  const response = fetch('https://api.nylas.com/calendars', {
    method: "POST",
    headers: {
      'Authorization': 'Bearer v4c3qoJ3xEnNgP2PbuJi3gU5cmqbbA',
      'Content-Type': 'application/json',
      'cache-control': 'no-cache'
    },
    body: JSON.stringify(api_body),
  }).then((res) => res.json()).then((data) => res.status(200).json({ response: data }));
  //end sending create calendar POST API request to nylas
});
//END CREATE CALENDAR API CALL






//START FETCH CALENDAR API CALL
//EXAMPLE:
//GET
//http://localhost:3001/api/calendar/3bt0gsh5fsfg5ii8sjw6ajibh
                                      //^ this is the calendar ID
router.get('/:id', (req, res) => {
  //start sending create calendar GET API request to nylas
  const response = fetch('https://api.nylas.com/calendars/'+req.params.id, {
    method: "GET",
    headers: {
      'Authorization': 'Bearer v4c3qoJ3xEnNgP2PbuJi3gU5cmqbbA',
      'Content-Type': 'application/json',
      'cache-control': 'no-cache'
    },
  }).then((res) => res.json()).then((data) => res.status(200).json({ response: data }));
  //end sending create calendar GET API request to nylas
});
//END FETCH CALENDAR API CALL




  module.exports = router;