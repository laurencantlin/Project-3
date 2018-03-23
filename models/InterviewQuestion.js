var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var interviewQuestion = sequelize.define("interviewQuestion", {
  question: {
    type: Sequelize.STRING,
    // unique: true
  },
  answer: {
    type: Sequelize.STRING
  },
  hint: {
    type: Sequelize.STRING
  },
  in_deck: {
    type: Sequelize.INTEGER
  },
  category: {
    type: Sequelize.STRING
  }
}, {
    timestamps: false
  });

interviewQuestion.sync();
module.exports = interviewQuestion;