import { ErrorMessage } from "../interface/error.interface";
import { NextFunction, Request, Response, ErrorRequestHandler } from "express";

const handlePrismaError = (err): ErrorMessage => {
  switch (err.code) {
    case "P2002":
      // handling duplicate key errors
      return {
        message: `Duplicate field value: ${err.meta.target}`,
        status: 400,
      };
    case "P2014":
      // handling invalid id errors
      return {
        message: `Invalid ID: ${err.meta.target}`,
        status: 400,
      };
    case "P2003":
      // handling invalid data errors
      return {
        message: `Invalid input data: ${err.meta.target}`,
        status: 400,
      };
    default:
      // handling all other errors
      return {
        message: `Something went wrong: ${err.message}`,
        status: 400,
      };
  }
};

// const handleJWTError = () =>
//   new CustomError("Invalid token please login again", 400);

// const handleJWTExpiredError = () =>
//   new CustomError("Token has expired please login again", 400);

const sendErrorDev = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    res.status(err.statusCode).json({
      status: err.status,
      errors: err,
      message: err.message,
      stack: err.stack,
    });
  } else {
    //rendered website
    res
      .status(err.statusCode)
      .render("error", { title: "Something went wrong!", msg: err.message });
  }
};

const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    if (err.isOperational)
      return res
        .status(err.statusCode)
        .json({ status: err.status, message: err.message });

    //programming errors dont leak details
    console.error("ERROR 💥", err);

    return res
      .status(400)
      .json({ status: " error", message: "Please try again later" });
  }

  //for rendered website
  if (err.isOperational)
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  //programming errors should not leak details to client

  return res
    .status(500)
    .json({ status: " error", message: "Sommething went wrong" });
};

const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: any
) => {
  const prismaError: ErrorMessage = handlePrismaError(err);
  res.status(prismaError.status).json({ error: prismaError.message });
};

export default errorHandler;
