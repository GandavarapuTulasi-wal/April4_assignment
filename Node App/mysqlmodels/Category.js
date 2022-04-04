const { Sequelize, DataTypes } = require('sequelize');
const db = require('../dbsql');
const Category = db.define(
  'category',
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Category;
