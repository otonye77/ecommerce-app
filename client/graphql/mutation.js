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