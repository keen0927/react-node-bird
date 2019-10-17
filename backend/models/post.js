module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post',{
    content: {
      type: DataTypes.TEXT, // 매우긴글은 TEXT
      allowNull: false,
    }
  }, {
    charset: 'utf8mb4', // 한글 + 이모티콘
    collate: 'utf8mb_general_ci', //
  });

  Post.associate = (db) => {
    db.Post.belongTo(db.User); // User 속해있다
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
  };

  return Post;
}