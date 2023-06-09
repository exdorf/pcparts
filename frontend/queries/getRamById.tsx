import { gql } from "@apollo/client";

const GetRamById = gql`query GetRamById($id: ID) {
    getRamBy(
        _id: $id
      )
      {
        brand {
          name
        }
        first_word_latency
        type {
          name
        }
        capacity
        cas_latency
        modules
        speed {
          name
        }
        model
      }
}
`;


export default GetRamById;
