import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import { userService } from "../services/user.services";

const authenticate = async (req: Request, res: Response, next: any) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error("Invalid Authorized");
    const user = await userService.checkAdmin(authorization);
    next();
  } catch (err) {
    return res.status(400).send({ message: "Unauthorized" });
  }
};

export default authenticate;
