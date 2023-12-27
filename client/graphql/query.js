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
