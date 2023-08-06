import { config } from "dotenv";
config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectDB from "./config/db.js";
import schema from "./schema/schema.js";
import colors from "colors";

connectDB();

const server = new ApolloServer({
  schema,
});

try {
  const { url } = await startStandaloneServer(server, {
    listen: {
      port: 4000,
      cors: {
        origin: "/",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      },
    },
  });

  console.log(`Server ready at ${url}`.blue.italic);
} catch (err) {
  console.error(`Failed to start server ${err.message}`);
}
