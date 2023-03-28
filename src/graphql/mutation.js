import { gql } from "@apollo/client";

export const CreateUser = gql`
  mutation ($input: UserInput) {
    addUser(input: $input) {
      firstName
      lastName
      email
    }
  }
`;
