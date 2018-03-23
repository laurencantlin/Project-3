

var Sequelize = require("sequelize");

var sequelize = new Sequelize("jsj3x7apas6k575e", "iphn3fzpfbvf3c8m", "zzqdyh18m3mcr2aq", {
    host: "gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306,
    pool: {
        max: 10,
        min: 0,
        idle: 20000,
    }
});

module.exports = sequelize;