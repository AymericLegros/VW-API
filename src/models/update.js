'use strict';
module.exports = (sequelize, DataTypes) => {
  var Update = sequelize.define('Update', {
    title: DataTypes.STRING,
    version: DataTypes.STRING,
    link: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.STRING
  }, {});
  Update.associate = function(models) {
    // associations can be defined here
  };
  return Update;
};