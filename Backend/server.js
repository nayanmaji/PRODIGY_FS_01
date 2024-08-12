require('dotenv').config()
const express = require('express');
const connectDB = require('./mongoDB');
const cors = require('cors')
const SignupRouter = require('./Router/SignupRouter')
const LoginRouter = require('./Router/LoginRouter');

const app = express();

const startServer = async () => {
  await connectDB();
  //CORS is a mechanism allows a web page to access restricted resources from a server on a domain different
  app.use(cors())
  app.use(express.json()); //middleware
  app.use('/', SignupRouter);
  app.use('/', LoginRouter);
  app.listen(4000, () => {
    console.log("SERVER READY")
  })
}

startServer();