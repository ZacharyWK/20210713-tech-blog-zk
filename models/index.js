const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const BlogPostComments = require('./BlogPostComments')

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

BlogPost.hasMany(Comment, {
  foreignKey: 'user_id'
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'id'
});


module.exports = { User, BlogPost, Comment, BlogPostComments};
