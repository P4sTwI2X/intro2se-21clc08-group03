const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECURE, (err, decodedToken) => {
            if (err) {
                return res.status(400).json({ status: 400, message: "Please login" });
            } else {
                next();
            }
        });
    } else return res.status(400).json({ status: 400, message: "Please login" });
};
