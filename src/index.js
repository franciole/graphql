import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!,
      users: [User!]!
    }
    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '1',
          userName: 'JohnDoe',
        };
      },
      users: () => {
        return [
          {
            id: '1',
            userName: 'JohnDoe',
          },
          {
            id: '2',
            userName: 'JaneSmith',
          },
        ];
      },
    },
  },
});

  server.listen().then(({ url }) => {
    console.log(`Server listen on url ${url}`);
  });
