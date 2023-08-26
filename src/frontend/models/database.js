const pgp = require("pg-promise")();

require("dotenv").config();

const db = pgp({
    host: process.env.HOST || "localhost",
    port: process.env.PORT_DB || "5432",
    database: process.env.DATABASE || "database",
    user: process.env.USER || "user",
    password: process.env.PASSWORD || "pass",
    max: process.env.MAX || 30,
});

module.exports = db;
