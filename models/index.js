// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
/*const Sequelize = require('Sequelize');*/

// Products belongsTo Category
Product.belongsTo(Category, {
  foreginKey: "category_id",
  onDelete: "CASCADE",
});

// Categories have many Products
/*const Product = sequelize.define('Product', {});*/

Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  foreignKey: "product_id",
  through: ProductTag,
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
