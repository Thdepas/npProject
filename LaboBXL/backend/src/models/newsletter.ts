import { Schema, model } from "mongoose";
import session from "express-session";
import { catchAsync } from "../middleware";
import { Router } from "express";
import { User } from "./user";

const newsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const NewsL = model("News", newsSchema);

const newsL = new NewsL({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const router = Router();

router.get(
  "/register",
  catchAsync(async (req, res) => {
    const user = await User.findById(req, session!.userId).select("email");
    res.json(user);
  })
);

router.post(
  "/news_letter",
  catchAsync(async (req, res) => {
    await newsL
      .save()
      .then((item) => {
        res.send("item saved to database");
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
      });
  })
);

export default router;
