import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
   query Products($searchTerm: String){
      products(searchTerm: $searchTerm){
        id
        name
        price
        photo
        description
      }
   }
`;

export const GET_ORDERS = gql`
  query {
    orders {
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
