module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag',{
    name: {
      type: DataTypes.STRING(200), // 매우긴글은 TEXT
      allowNull: false,
    }
  }, {
    charset: 'utf8mb4', // 한글 + 이모티콘
    collate: 'utf8mb_general_ci', //
  });

  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' }); // 다대다는 중간에 테이블이 생긴다 through시 상대 테이블에도 순서를 바꿔 삽입해야함
  };

  return Hashtag;
}