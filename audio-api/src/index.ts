import * as express from "express";

import { ApolloServer } from "apollo-server-express";
import { FyydAPI } from "./sources/fyyd";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import config from "./config";
import { loadSchema } from "@graphql-tools/load";
import { resolvers } from "./resolvers/index";

const startServer = async () => {
  // load SDL from multiple files using glob
  const schema = await loadSchema("./src/schema/*.graphql", {
    loaders: [new GraphQLFileLoader()],
    resolvers
  });

  const server = new ApolloServer({
    schema,
    dataSources: () => {
      return {
        fyydAPI: new FyydAPI(),
      };
    },
    context: () => {
      return {
        token: "foo",
      };
    },
    debug: true,
  });

  const app = express();

  server.applyMiddleware({ app });

  app.listen({ port: config.port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`
    )
  );
};

startServer();
