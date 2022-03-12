import fastify from "fastify";
import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { InternetArchiveAPI } from "./sources/internetarchive";
import config from "./config";
import { loadSchema } from "@graphql-tools/load";

import config from "./config";
import { FyydAPI } from "./sources/fyyd";
import { resolvers } from "./resolvers/index";

const startServer = async () => {
  // load SDL from multiple files using glob
  const schema = await loadSchema("./src/schema/*.graphql", {
    loaders: [new GraphQLFileLoader()],
    resolvers
  });

  const apolloServer = new ApolloServer({
    schema,
    dataSources: () => {
      return {
        fyydAPI: new FyydAPI(),
        internetArchiveAPI: new InternetArchiveAPI(),
      };
    },
    context: () => {
      return {
        token: "foo",
      };
    },
    debug: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  const app = fastify();
  await apolloServer.start();

  app.register(apolloServer.createHandler());
  app.listen(config.port, () => console.log(
    `🚀 Server ready at http://localhost:${config.port}${apolloServer.graphqlPath}`
  )
  );
};

startServer();
