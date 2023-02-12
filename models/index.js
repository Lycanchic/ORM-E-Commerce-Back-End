// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const Sequelize = require('Sequelize');

// Products belongsTo Category
/*const Category = sequelize.define('Category', {});*/


  Category.hasMany(Product, {
    foreignKey: 'category_id',
  });

// Categories have many Products
/*const Product = sequelize.define('Product', {});*/

  Product.hasMany(Category, {
    foreignKey: 'category_id',
  });



// Products belongToMany Tags (through ProductTag)
/*const ProductTag = sequelize.define('ProductTag', {});*/

  ProductTag.hasMany(Product, {
    foreignKey: 'product_id',
  });
  ProductTag.hasMany(Tag, {
    foreignKey: 'tag_id',
  });


// Tags belongToMany Products (through ProductTag)
/*const Tag = sequelize.define('Tag', {});*/

  Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id',
  });




module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
 }

