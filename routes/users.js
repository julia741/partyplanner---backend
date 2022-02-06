const express = require("express");
const mongoose = require("mongoose");
const User = require('../models/user.model');
const router = express.Router();
router.get("/",(req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/",(req, res) => {
  
  

  const newUser = new User({
    
    username: req.body.username});

  newUser.save()
   .then(() => res.json('User added!'))

.catch(err => res.status(500).json('Error: ' + err));

});

module.exports = router;

