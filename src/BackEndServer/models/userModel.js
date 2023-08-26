const db = require("./database.js");

module.exports = {
    getAllUsers: async () => {
        try {
            const data = await db.any('select * from "User"');
            return data;
        } catch (e) {
            console.log(e);
        }
    },
    getUserByUsername: async (username) => {
        try {
            const data = await db.one('select * from "User" where "userName"=$1', [username]);
            return data;
        } catch (e) {
            console.log(e);
        }
    },
    getUserById: async (id) => {
        try {
            const data = await db.one('select * from "User" where "userId"=$1', [id]);
            return data;
        } catch (e) {
            console.log(e);
        }
    },
    insertUser: async (user) => {
        try {
            const maxId = await db.one('select max("userId") from "User"');
            if (maxId.max === null) {
                id = 1;
            } else id = parseInt(maxId.max) + 1;

            const data = await db.one('Insert into "User" values ($1, $2, $3, $4, $5)', [
                id,
                user.username,
                user.password,
                user.fullname,
                user.address,
            ]);
            return data;
        } catch (e) {
            console.log(e);
        }
    },
};
