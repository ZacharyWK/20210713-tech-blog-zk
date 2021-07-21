const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class BlogPostComments extends Model {}

BlogPostComments.init
({
id:
{
type: DataTypes.INTEGER,
allowNull:false,
primaryKey: true,
autoIncrement: true
},

blogpost_id: 
{
type: DataTypes.INTEGER,
references: {model: 'blogpost',key: 'id',},
},

comment_id: 
{
type: DataTypes.INTEGER,
references: {model: 'comment',key: 'id',},
},
},

{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'blogpostcomments',
});

module.exports = BlogPostComments;