var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Category = sequelize.define("Category", {
of_deck:   {
  type: Sequelize.STRING,
  // unique: true
},
  Category: {
    type: Sequelize.STRING,
    // unique: true
  }
}, {
    timestamps: false
  });

Category.sync();
module.exports = Category;