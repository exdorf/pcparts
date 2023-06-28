import { gql } from "@apollo/client";

const GetMotherboardsBy = gql`query GetMotherboardsBy($id: ID) {
    getMotherboardsBy(_id: $id) {
        brand {
          name
        }
        model
        ram_slots
        socket {
          name
        }
        chipset {
          name
        }
        form_factor {
          name
        }
        graphics_bus {
          name
        }
    }
}
`;

export default GetMotherboardsBy;
