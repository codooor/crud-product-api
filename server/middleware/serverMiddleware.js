import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

const serverMiddleware = (server) => {
  return [
    "/",
    cors(),
    bodyParser.json(),
    express(server, {
      context: async ({ req }) => {
        const token = req.headers.authorization?.split(" ")[1];
        let user = null;

        try {
          user = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
          // console.error("Token verification failed:", err.message);
        }

        return { user };
      },
    }),
  ];
};

export default serverMiddleware;
