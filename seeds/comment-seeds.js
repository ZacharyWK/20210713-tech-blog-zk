const { Comment } = require('../models');

const commentData = [
  {
    body: 'Shirts',
    Post_id: 1,
    user_id: 2
  },
  {
    body: 'Shorts',
    Post_id: 2,
    user_id: 1
  },
  {
    body: 'Music',
    Post_id: 3,
    user_id: 2
  },
  {
    body: 'Hats',
    Post_id: 1,
    user_id: 3
  },
  {
    body: 'Shoes',
    Post_id: 3,
    user_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
