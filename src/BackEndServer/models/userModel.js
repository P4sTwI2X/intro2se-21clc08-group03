const db = require("./database.js");

module.exports = {
    getAllUsers: async () => {
        try {
            const data = await db.any('select * from "User"');
            return data;
        } catch (e) {
            //console.log(e);
			return null;
        }
    },
    getUserByUsername: async (username) => {
        try {
            const data = await db.one('select * from "User" where "userName"=$1', [username]);
            return data;
        } catch (e) {
            //console.log(e);
			return null;
        }
    },
    getUserById: async (id) => {
        try {
            const data = await db.one('select * from "User" where "userId"=$1', [id]);
            return data;
        } catch (e) {
            //console.log(e);
			return null;
        }
    },
    insertUser: async (user) => {
        try {
            const maxId = await db.one('select max("userId") from "User"');
            if (maxId.max === null) {
                id = 1;
            } else id = parseInt(maxId.max) + 1;

            const data = await db.one('Insert into "User" ("userId", "userName", "password", "fullName") values ($1, $2, $3, $4)', [
                id,
                user.username,
                user.password,
                user.fullname,
                //user.address,
            ]);
            return data;
        } catch (e) {
            console.log(e);
        }
    },
};
