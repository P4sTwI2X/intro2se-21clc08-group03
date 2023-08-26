const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.getUserByUsername(username);
        if (!user) {
            return res.status(400).json({ status: 400, message: "Username doesn't exist" });
        }
        try {
            const cmp = await bcrypt.compare(password, user.password);
            let token;
            if (cmp) {
                token = jwt.sign(user, process.env.ACCESS_TOKEN_SECURE, {
                    expiresIn: 600000,
                });

                res.cookie("token", token, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 600000,
                });

                return res.status(200).json({ status: 200, data: user, token: token });
            } else {
                return res.status(400).json({ status: 400, message: "Username or password is incorrect" });
            }
        } catch (err) {
            console.log(err);
        }
    } catch (error) {
        console.log(error);
    }
};

exports.postRegister = async (req, res) => {
    const { username, password, fullname} = req.body;

    const passHashed = await bcrypt.hashSync(password, saltRounds);

    const isUsernameExist = await userModel.getUserByUsername(username);
    const newUser = {
        username,
        password: passHashed,
        fullname,
		//address,
    };

    if (fullname == null) {
        return res.status(400).json({ status: 400, message: "Please provide your name to create new account" });
    }
    /*if (address == null) {
        return res.status(400).json({ status: 400, message: "Please provide your address to create new account" });
    }*/

    if (!isUsernameExist) {
        await userModel.insertUser(newUser);
        const token = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECURE, {
            expiresIn: 600000,
        });
        res.cookie("token", newUser, {
            httpOnly: true,
            secure: false,
            maxAge: 600000,
        });
        return res.json({
            status: 200,
            token,
            data: {
                username,
                fullname,
                //address,
            },
        });
    }
    return res.json({ status: 400, message: "Username has already exists, please create new username" });
};

exports.logOut = (req, res, next) => {
    res.cookie("token", "", { maxAge: 1 });
    res.status(200).send("Logout success");
};
