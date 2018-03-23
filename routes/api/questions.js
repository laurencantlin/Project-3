const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/books"
router.route("/")
  .get(questionsController.findAll)

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
