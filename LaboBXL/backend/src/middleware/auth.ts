import { Request, NextFunction } from "express";
import { isLoggedIn } from "../auth";
import { BadRequest, Unauthorized } from "../errors";

export const guest = (req: Request, res: Response, next: NextFunction) => {
  if (isLoggedIn(req)) {
    return next(new BadRequest("you are already logged in"));
  }
  next();
};

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!isLoggedIn(req)) {
    return next(new Unauthorized("you must be logged in"));
  }
  next();
};