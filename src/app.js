import express from "express";
const app = express();

import cors from "cors";
app.use(
  cors({
    origin: `${process.env.ORIGIN}` || "*",
    credentials: true,
  })
);

import cookieParser from "cookie-parser";
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

export { app };
