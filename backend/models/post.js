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
    db.Post.belongsTo(db.User); // User 속해있다
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsTo(db.post, { as: 'Retweet' }); // 둘다 같아 서로 구별이 안될때 as로 이름을 지어준다
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // 다대다는 중간에 테이블이 생긴다 through시 상대 테이블에도 순서를 바꿔 삽입해야함
    db.Post.belongsToMany(db.User, { through: 'Like' });
  };

  return Post;
}