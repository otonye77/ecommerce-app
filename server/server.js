const cors = require("cors");
const { json } = require("body-parser");
const express = require("express");
const { graph } = require("./graphql");
const { expressMiddleware } = require('@apollo/server/express4');


async function start() {
  const app = express();
  await graph.start();
  app.use(cors());
  app.use(json());

  app.use("/graphql", expressMiddleware(graph));

  app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000/graphql`);
  });
}

start();
