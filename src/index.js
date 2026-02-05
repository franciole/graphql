import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      average: Float
      married: Boolean!
      arraysString: [String]!
      arraysInt: [Int]!
      arraysFloat: [Float]!
      arraysBoolean: [Boolean]!
    }
  `,
  resolvers: {
    Query: {
      id: () => '123',
      name: () => 'John Doe',
      age: () => 30,
      average: () => 85.5,
      married: () => false,
      arraysString: () => ['Hello', 'World'],
      arraysInt: () => [1, 2, 3],
      arraysFloat: () => [1.5, 2.5, 3.5],
      arraysBoolean: () => [true, false, true],
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`Server listen on url ${url}`);
});
