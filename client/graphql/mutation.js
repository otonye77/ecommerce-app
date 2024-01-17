import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation CreateOrder($productIds: [String]!, $userId: String!) {
    createOrder(productIds: $productIds, userId: $userId) {
      id
      user {
        id
        username
        email
      }
      products {
        id
        name
        price
        photo
        description
        quantity
      }
      status
    }
  }
`;
export const RESET_ORDER = gql`
  mutation ResetOrder {
    resetOrder
  }
`;

export const DELETE_ORDER = gql`
  mutation DeleteOrder($orderId: String!) {
    deleteOrder(orderId: $orderId) {
      id
      products {
        id
        name
        price
        photo
        description
        quantity
      }
      status
    }
  }
`;

export const CREATE_USER = gql`
   mutation CreateUser($input: UserInput!){
    createUser(input: $input){
      id
      username
      email
    }
   }
`;