module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment',{
    src: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_general_ci',
  });

  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User)
    db.Comment.belongsTo(db.Post)
  };

  return Comment;
}