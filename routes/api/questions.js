const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

router.route("/questions").get(questionsController.findAll);

  router.route("/")
  .get(questionsController.findAll)

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
