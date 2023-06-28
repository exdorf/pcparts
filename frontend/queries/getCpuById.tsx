import { gql } from "@apollo/client";

const GetCpuById = gql`query getCpuById($id: ID) {
  getCpuBy(_id: $id) {
    brand {
      name
    }
    model
    tdp
    smt
    socket {
      name
    }
    ram_max
    ram_type {
      name
    }
  }
}
`;


export default GetCpuById;
