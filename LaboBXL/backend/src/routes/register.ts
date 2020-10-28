import { Router } from "express";
import { guest, catchAsync } from "../middleware";
import { validate, registerSchema } from "../validation";
import { User } from "../models";
import { logIn } from "../auth";
import { BadRequest } from "../errors";

const router = Router();

/*
router.get("/register", (req, res) => {
  console.log(req.query);

  res.send(`
  <h3>Create New Account</h3>
  <form method='post' action= '/register'">
              <input name="name" class="form-control" placeholder="Name"required>
              <input type="email" name="email" placeholder="Enter Email" required>
              <input type="password" name="password" placeholder="Password" required>
              <input type="password" name="passwordConfirmation" placeholder="Confirm Password" required>
      <button type="submit" class="btn hvr-hover">Register</button>
  </form>
</div>`);
});

*/
router.post(
  "/register",
  catchAsync(async (req, res) => {
    await validate(registerSchema, req.body);

    const { email, name, password } = req.body;

    const found = await User.exists({ email });
    
    if (found) {
      throw new BadRequest("Invalid email");
    }

    const user = await User.create({
      email,
      name,
      password,
    });

    logIn(req, user.id);

    res.json({ message: "ok" });
  })
);

export default router;