import { gql } from "@apollo/client";

const getStorageById = gql`query getStorageById($id: ID) {
    getStorageBy(_id: $id) {
        capacity
        model
        port {
          name
        }
        type {
          name
        }
        brand {
          name
        }
        form_factor {
          name
        }
    }
}
`;

export default getStorageById;
