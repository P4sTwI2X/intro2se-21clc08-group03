import { Router } from "express";
import { objectController } from "../controllers/object.controller";

const objectRouter = Router();

/**
 * @swagger
 *
 * /objects/getAll:
 *   get:
 *     tags:
 *       - Objects
 *     produces:
 *       - application/json
 *     description: get all sample objects
 *     responses:
 *       200:
 *         description: Success
 */
objectRouter.get("/getAll", objectController.getAll);

export default objectRouter;
