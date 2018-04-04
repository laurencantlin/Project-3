const router = require("express").Router();
const decksController = require("../../controllers/decksController");
router.route("/")
  .get(decksController.findAll)
  .post(decksController.newDeck)
module.exports = router;