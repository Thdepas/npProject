import { Router } from "express";
import { logIn, logOut } from "../auth";
import { Unauthorized } from "../errors";
import { auth, catchAsync, guest } from "../middleware";
import { User } from "../models";
import { validate, loginSchema } from "../validation";

const router = Router();


router.get("/login", (req, res) => {
  console.log(req.session);

  console.log(req.query);

  res.send(` <section id="login">
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4">Welcome back!</h3>
                <form>
                  <div class="form-label-group">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                    <label for="inputEmail">Email address</label>
                  </div>
  
                  <div class="form-label-group">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                    <label for="inputPassword">Password</label>
                  </div>
  
                  <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Remember password</label>
                  </div>
                  <button class="btn btn-lg btn-outline-dark btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                  <div class="text-center">
                    <a class="small" href="#">Forgot password?</a></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

`);
}); 

router.post(
  "/login",
  guest,
  catchAsync(async (req, res) => {
    await validate(loginSchema, req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await user.matchesPassword(password))) {
      throw new Unauthorized("Incorrect email or password");
    }
    logIn(req, user.id);
    res.json({ message: "ok" });
    res.redirect("/");
  })
);

router.post(
  "/logout",
  auth,
  catchAsync(async (req, res) => {
    await logOut(req, res);
    res.json({ message: "OK" });
  })
);

export default router;
