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

import admin from "firebase-admin";
import { ApiResponse } from "./utils/ApiResponse.js";
import { ApiError } from "./utils/ApiError.js";
admin.initializeApp({
  credential: admin.credential.cert(
    "./bhatkanti-users-firebase-adminsdk-fbsvc-eb56a52497.json"
  ),
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userResponce = await admin.auth().createUser({
    email: email,
    password: password,
    emailVerified: false,
    disabled: false,
  });

  if (!userResponce) {
    throw new ApiError(400, "error");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "user created", userResponce));
});

export { app };
