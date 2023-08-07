import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
      description
      scents
      inventory
    }
  }
`;

export default GET_PRODUCTS;
