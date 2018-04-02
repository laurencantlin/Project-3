const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require("../../config/passport");

router.route("/")
    .post(passport.authenticate("local"), usersController.login);

router.route("/signup")
    .post(usersController.signup);

router.route("/user_data")
.get(usersController.getUser)
module.exports = router;