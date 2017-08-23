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

  Burger.associate = function(models) {
    Burger.belongsTo(models.Person, {});
  };

  return Burger;
};

