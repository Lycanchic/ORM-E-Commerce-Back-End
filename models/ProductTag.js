const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER, 
     key: "id",
     references: {
      key: "id",
      model: Product,
  },
},
    tag_id: {
      key: "id",
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: Tag,
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  },
);

module.exports = ProductTag;
