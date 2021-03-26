const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
 
const uri = 'mongodb+srv://adm:adm123@twitterv2.7vqbg.mongodb.net/DBTwitter?retryWrites=true&w=majority'


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!');
});

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors);
app.use(express.json);
app.use(require("./routes"));

server.listen(3000, () => {
  console.log('Server connected!');
});