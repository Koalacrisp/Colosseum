module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    userName: {
    	type: DataTypes.STRING,
      allowNull: false,
    	validate: {
    		len: [1, 50]
    	}
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });

  Comment.associate = function(models) {
    Comment.belongsTo(models.Person, {});
  };

  return Comment;
};

