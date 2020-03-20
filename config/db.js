const sequelize = require("sequelize")

const db = new sequelize("latihan","root","", {
    dialect: "mysql"
});

db.sync({});
module.exports = db;