const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

router.route("/")
  .get(questionsController.findAll);

router
  .route("/:deckname")
  .get(questionsController.findByDeck);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
