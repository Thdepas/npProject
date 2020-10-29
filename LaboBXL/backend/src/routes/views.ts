import { Router } from "express";
import { catchAsync, auth, guest } from "../middleware";

const router = Router();

router.get(
  "/",
  catchAsync(async (req, res) => {
    res.render("index");
  })
);
export default router;
