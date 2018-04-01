const db = require("../models");
module.exports = {
  findAll: function (req, res) {
    console.log("controller");
    db.Deck
      .findAll()
      .then((results) => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  newDeck: function(req, res) {
    db.Deck
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};