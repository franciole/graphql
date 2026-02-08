import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import fetch from 'node-fetch';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server listen on url ${url}`);
});
