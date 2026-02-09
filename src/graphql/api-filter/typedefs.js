import { gql } from 'apollo-server-core';

export const apiFiltersTypeDefs = gql`
    input ApiFiltersInput {
      _sort: String
      _order: String
      _limit: Int
      _start: Int
    }
`;
