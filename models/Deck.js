var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Deck = sequelize.define("Deck", {
  DeckName: {
    type: Sequelize.STRING,
    // unique: true
  }
}, {
    timestamps: false
  });

Deck.sync();
module.exports = Deck;