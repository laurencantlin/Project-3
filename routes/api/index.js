const router = require("express").Router();
const bookRoutes = require("./questions");

// Book routes
router.use("/questions", questionRoutes);

module.exports = router;
//