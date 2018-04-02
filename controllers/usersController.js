const db = require("../models");
const Sequelize = require('sequelize');
module.exports = {
    login: function (req, res) {
        res.json("/members");
    },
    signup: function (req, res) {
        console.log("controller");
        db.User
            .create({
                email: req.body.email,
                password: req.body.password
            }).then(function () {
                res.redirect(307, "/api/login");
            }).catch(function (err) {
                console.log(err);
                res.json(err);
                // res.status(422).json(err.errors[0].message);
            });
    },
    getUser: function (req, res) {
        if (!req.user) {
            console.log("nouser")
            // The user is not logged in, send back an empty object
            res.json({});
        }
        else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    }
}