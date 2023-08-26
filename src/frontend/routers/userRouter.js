const app = require("express");
const router = app.Router();
const userCtrl = require("./../controllers/userCtrl.js");

router.post("/login", userCtrl.postLogin);

router.post("/register", userCtrl.postRegister);

router.get("/logout", userCtrl.logOut);

module.exports = router;
