import express from "express";
import session, { Store } from "express-session";
import path from "path";
import { SESSION_OPTIONS } from "./config";
import { serverError, notFound } from "./middleware/errors";
import {  news_letter } from "./models";
import { login, register, views } from "./routes";

export const createApp = (store: Store) => {
  const app = express();

  app.use(
    session({
      ...SESSION_OPTIONS,
      store,
    })
  );

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.set("view engine", "ejs");

  app.set("views", path.join(__dirname, "views"));

  app.use("/static", express.static(path.join(__dirname, "public")));

  app.use(news_letter);

  app.use(views);

  app.use(login);

  app.use(register);

  app.use(notFound);

  app.use(serverError);

  return app;
};
