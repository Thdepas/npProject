import { Router } from "express";
import { logIn, logOut } from "../auth";
import { Unauthorized } from "../errors";
import { catchAsync, guest } from "../middleware";
import { User } from "../models";
import { validate, loginSchema } from "../validation";

const router = Router();

router.get(
  "/",
  catchAsync(async (req, res) => {
    res.render("index");
  })
);

router.post(
  "/",
  guest,
  catchAsync(async (req, res) => {
    await validate(loginSchema, req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });


    if (!user || !(await user.matchesPassword(password))) {
      throw new Unauthorized("Incorrect email or password");
    }
    logIn(req, user.id);
    res.redirect("/home");

  })

);

export default router;
