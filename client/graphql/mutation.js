import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation CreateOrder($productIds: [String]!) {
    createOrder(productIds: $productIds) {
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
