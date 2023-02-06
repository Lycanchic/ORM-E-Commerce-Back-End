// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const Sequelize = require('Sequelize');

// Products belongsTo Category
/*const Category = sequelize.define('Category', {});*/

Category.associate = (models) => {
  Category.hasMany(models.Product, {
    foreignKey: 'category_Id',
  });
};

// Categories have many Products
/*const Product = sequelize.define('Product', {});*/

Product.associate = (models) => {
  Product.belongsTo(models.Category, {
    foreignKey: 'category_Id',
  });
  
  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      foreignKey: 'category_Id',
    });
  };
  

};


// Products belongToMany Tags (through ProductTag)
/*const ProductTag = sequelize.define('ProductTag', {});*/

ProductTag.associate = (models) => {
  ProductTag.belongsTo(models.Product, {
    foreignKey: 'product_Id',
  });
  ProductTag.belongsTo(models.Tag, {
    foreignKey: 'tag_Id',
  });
};

// Tags belongToMany Products (through ProductTag)
/*const Tag = sequelize.define('Tag', {});*/

Tag.associate = function (models) {
  Tag.belongsToMany(models.Product, {
    through: 'Product_Tag',
    foreignKey: 'tag_Id',
    otherKey: 'product_Id'
  });
};



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
 }

