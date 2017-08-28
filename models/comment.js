module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    userName: {
    	type: DataTypes.STRING,
    	validate: {
    		len: [1, 50]
      },
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 140]
      },
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 140]
      },
      allowNull: false
    }
  });
  return Comment;
};

