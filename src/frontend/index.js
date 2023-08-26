const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
var cors = require('cors')

const userRouter = require("./routers/userRouter.js");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3113;

app.use(morgan("tiny"));
app.use(cors());

app.set("trust proxy", 1);
app.use(
    session({
        secret: "this is a super secret session sign in string",
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 10 * 60 * 60 * 1000 },
    }),
);
app.use(cookieParser());

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running: port ${PORT}`);
    console.log(`Connect to Postgres with user: ${process.env.USER} and PORT: ${process.env.PORT_DB}`);
});
