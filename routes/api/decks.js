const router = require("express").Router();
const decksController = require("../../controllers/decksController");


  router.route("/")
  .get(decksController.findAll)

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
