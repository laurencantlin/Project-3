var Sequelize = require("sequelize");

var sequelize = new Sequelize("lf9oky8cdp6qk65h", "krgwfxvslhvwuuq4", "z08h2iw9bhjyi7hh", {
    host: "ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306,
    pool: {
        max: 10,
        min: 0,
        idle: 20000,
    }
});

module.exports = sequelize;