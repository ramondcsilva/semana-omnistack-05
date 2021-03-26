const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date, 
    default: Date.now()
  }
});

/*
const test = mongoose.model('Tweet', TweetSchema);

const data = {
  author: 'Ramon',
  content: 'twittei poha'
};

const demo = new test(data)

demo.save((error) => {
  if(error) {
    console.log('AAAAAAAAAAAAAAAAAAA')
  } else {
    console.log('FOI POHA')
  }
})
*/
module.exports = mongoose.model('Tweet', TweetSchema);