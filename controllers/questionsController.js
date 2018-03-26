const db = require("../models");
module.exports = {
  findAll: function (req, res) {
    console.log("controller");
    db.interviewQuestion
      .findAll()
      .then((results) => res.json(results))
      .catch(err => res.status(422).json(err));
  },
};