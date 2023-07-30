import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import objectRouter from "./routes/object.route";
const PORT = process.env.PORT || 8080;

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BuyMee API Docs",
      version: "1.0.0",
    },
  },
  servers: {
    url: `http://localhost:${PORT}/`,
  },
  apis: [
    "./src/routes/*/*.route.ts",
    "./src/routes/*.route.ts",
    "./src/routes/*.*.ts",
    "./src/routes/*.ts",
    "./*.ts",
  ],
};

const swaggerDoc = swaggerJSDoc(options);

const app = express();
dotenv.config();

app.use(bodyParser.json({ type: "application/*+json" }));

app.listen(PORT, () => {
  console.log(`Sever is listenning on port ${PORT}`);
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use("/api-doc/", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// ____ WRITE FROM HERE ____

app.use("/objects/", objectRouter);
