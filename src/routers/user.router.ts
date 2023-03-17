import {Request, Response, Router} from "express";

import {userController} from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getAll);

router.get("/:userId", userController.getById);

router.post("/", userController.create);

router.put("/:userId", userController.update);

router.delete("/:userId", userController.delete);

router.get("/welcome", (req: Request, res: Response) => {
    res.send("WELCOME");
});
export const userRouter = router