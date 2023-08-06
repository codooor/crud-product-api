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

const { url } = await startStandaloneServer(server);

console.log(`Server ready at ${url}`.blue.italic);
