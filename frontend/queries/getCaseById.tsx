import { gql } from "@apollo/client";

const GetCaseById = gql`query getCpuById($id: ID) {
    getCaseBy(_id: $id) {
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


export default GetCaseById;
