const { Post } = require('../models');

const postData = [
  {
    name: "Music Near Me",
    description: "A mobile app that will send you notifications whenever a concert is playing in your area.",
    user_id: 1
  },
  {
    name: "The Ultimate Tech Quiz",
    description: "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
    user_id: 2
  },
  {
    name: "Roll 'Em Up",
    description: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    user_id: 2
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
