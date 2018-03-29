const db = require("../models");
const Sequelize      = require('sequelize');
const Op=Sequelize.Op
module.exports = {
  findAll: function (req, res) {
    console.log("controller");
    db.interviewQuestion
      .findAll()
      .then((results) => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findByDeck: function (req, res) {
    db.interviewQuestion
      .findAll({
        where: {
          in_deck:req.params.deckname
        }
      })
      .then((results) => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findByDecks: function (req, res) {
    db.interviewQuestion
      .findAll({
        where: {in_deck:["Behavioral Interview Questions","Coding Problems"]}       
      })
      .then((results) => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findQuestion: function (req, res) {
    db.interviewQuestion
      .findAll({
        where: {
          id:req.params.questionid
        }
      })
      .then((results) => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  
newQuestion: function(req, res) {
    db.interviewQuestion
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateQuestion: function(req, res) {
    db.interviewQuestion
      .findOneAndUpdate({ _id: req.params.questionid}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteQuestion: function(req, res) {
    db.interviewQuestion
      .findById({ _id: req.params.questionid })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};