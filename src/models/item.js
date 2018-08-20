'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    uniqueName: {
      type: DataTypes.STRING,
      unique: true
    },
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    imageName: DataTypes.STRING,
    data: DataTypes.JSON
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};