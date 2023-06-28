import { gql } from "@apollo/client";

const GetPowerSupplierBy = gql`query GetPowerSupplierBy($id: ID) {
    getPowerSupplierBy(_id: $id) {
        model
        brand {
          name
        }
        form_factor {
          name
        }
    }
}

`;

export default GetPowerSupplierBy;
