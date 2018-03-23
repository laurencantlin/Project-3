var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var deck = sequelize.define("deck", {
  deckName: {
    type: Sequelize.STRING,
    // unique: true
  }
}, {
    timestamps: false
  });

deck.sync();
module.exports = deck;