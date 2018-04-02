var Sequelize = require("sequelize");
var bcrypt = require("bcrypt-nodejs");
var sequelize = require("../config/connection.js");
// require('sequelize-isunique-validator')(Sequelize)

// module.exports = function (sequelize, Sequelize) {
var User = sequelize.define("User", {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    // The password cannot be null
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
//     User.prototype.validPassword = function (password) {
//         return bcrypt.compareSync(password, this.password);
//     };

//     User.hook("beforeCreate", function (user) {
//         user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//     });
//     return User;
// }

User.sync();
module.exports = User;