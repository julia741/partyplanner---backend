const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect("mongodb+srv://admin:admin@cluster0.lu5t7.mongodb.net/mydatabase?retryWrites=true&w=majority");


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const partiesRouter = require('./routes/parties');
const usersRouter = require('./routes/users');
app.use('/parties', partiesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
   
}
);