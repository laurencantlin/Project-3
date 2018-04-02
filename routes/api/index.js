const router = require("express").Router();
const decksRoutes = require("./decks");
const questionsListRoutes = require("./questions");
const usersRoutes = require("./users");

// const indexCardRoutes = require("./decks");
// const practiceSetupRoutes = require("./decks");
// const practiceSessionRoutes = require("./decks");


router.use("/decks", decksRoutes);
router.use("/questions", questionsListRoutes);
router.use("/login", usersRoutes);

// router.use("/indexcard", indexCardRoutes);
// router.use("/practicesetup", practiceSetupRoutes);
// router.use("/practicesession", practiceSessionRoutes);

module.exports = router;