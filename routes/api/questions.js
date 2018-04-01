const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

router.route("/")
  .get(questionsController.findAll)
  .post(questionsController.newQuestion)


router
  .route("/:deckname")
  .get(questionsController.findByDeck);


router
  .route("/indecks")
  .get(questionsController.findByDecks);

router
  .route("/id/:questionid")
  .get(questionsController.findQuestion)
  .put(questionsController.updateQuestion);

  // .post(questionsController.newQuestion);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
