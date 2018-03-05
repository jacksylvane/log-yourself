const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongojs = require("mongojs");
const db = mongojs("log-yourself", ["log"]);

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

let testResponse = {
  status: 200,
  data: "ok"
};

// Get all logs
router.get('/logs', (req, res) => {
  db.logs.find().sort({ "week": 1 }, (err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
  });
});

// Get Work Logs
router.get('/logs/work', (req, res) => {
  db.logs.find({ "type": "work" }).sort({ "week": 1 }, (err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
  });
});

// Get Personal Logs
router.get('/logs/personal', (req, res) => {
  db.logs.find({ "type": "personal" }).sort({ "week": 1 }, (err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
  });
});

// Save log
router.post('/log', (req, res) => {
  db.logs.insert(req.body, (err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
  });
});

// Delete log
router.post('/delete/:id', (req, res) => {
  console.log(req.params.id);
  db.logs.remove({
    _id: mongojs.ObjectId(req.params.id)}, (err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
    console.log(response);
  });
});

// Update log
router.put('/update/:id', (req, body, res) => {
  console.log(req.params.id, req.body);
  const bodyToUpdate = {
    '_id': mongojs.ObjectId(req.params.id),
    'week': req.body.week,
    'type': req.body.type,
    'text': req.body.text,
    'days': req.body.days
  };
  console.log(bodyToUpdate);
  db.logs.update(
    {_id: mongojs.ObjectId(req.params.id)}, bodyToUpdate, (err, res) => {
    if (err) return next(err);
     /*  response.data = {"text":"all good"};
      res.json(response);
      console.log(response); */
  });
});


module.exports = router;