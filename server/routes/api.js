const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongojs = require("mongojs");
// const db = mongojs("log-yourself", ["logs"]);
const db = mongojs('mongodb://admin:pucBim2SJAXm@ds213759.mlab.com:13759/log-yourself', ["logs"]);

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get all logs
router.post('/logs', (req, res) => {
  console.log(req.body);
  db.logs.find().sort({ "week": 1 }, (err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
  });
});

// Get Work Logs
router.post('/logs/work', (req, res) => {
  // console.log("Receive request for /logs/work");
  db.logs.find({ "type": "work" }).sort({ "week": 1 }, (err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
  });
});

// Get Personal Logs
router.post('/logs/personal', (req, res) => {
  console.log("Receive request for /logs/personal");
  db.logs.find({ "type": "personal" }).sort({ "week": 1 }, (err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
  });
});


// Save log
router.post('/log', (req, res) => {
  console.log(req.body);
  db.logs.insert(req.body, (err, users) => {
    if (err) return next(err);
    response.data = users;
    response.message = 'Log has been succesfully added.'
    res.json(response);
  });
});

// Delete log
router.post('/delete/:id', (req, res) => {
  // console.log("Received DELETE request");
  console.log(req.params.id);
  db.logs.remove({
    _id: mongojs.ObjectId(req.params.id)}, (err, users) => {
    if (err) return next(err);
    response.data = users;
    response.message = 'Log has been succesfully deleted.'
    res.json(response);
  });
});

// Update log
router.put('/update/:id', (req, res) => {
  // console.log("Received UPDATE request");
  const bodyToUpdate = {
    '_id': mongojs.ObjectId(req.params.id),
    'week': req.body.week,
    'userId': req.body.userId,
    'type': req.body.type,
    'text': req.body.text,
    'days': req.body.days
  };
  db.logs.update({
    _id: mongojs.ObjectId(req.params.id)
  }, bodyToUpdate, (err, logs) => {
    if (err) return next(err);
    response.data = logs;
    res.json(response);
  });
});


module.exports = router;