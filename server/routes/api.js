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

// Get users
router.get('/logs', (req, res) => {
  db.logs.find().sort({ "week": 1 }, (err, users) => {
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
router.post('/delete', (req, res) => {
  console.log(req.body);
  db.logs.remove(req.body, (err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
  });
});


module.exports = router;