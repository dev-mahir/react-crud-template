import { gql } from "@apollo/client";

export const GET_USERS = gql`
 query getUsers{
  users {
    id
    firstName
  }
}
`;


// Get single user 
export const GET_USER = gql`
  query Get_User($userId: ID!) {
    user(id: $userId) {
      id
      firstName
      lastName
      email
    }
  }
`;
