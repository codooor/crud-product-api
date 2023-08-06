import { config } from "dotenv";
config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectDB from "./config/db.js";
import schema from "./schema/schema.js";
import colors from "colors";

connectDB();

try {
  const server = new ApolloServer({
    schema,
    cors: {
      origin: "*", // Adjust as needed
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  });

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
} catch (err) {
  console.error(`Failed to start server ${err.message}`);
}
