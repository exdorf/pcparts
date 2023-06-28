import { gql } from "@apollo/client";

const GetGraphicBy = gql`query GetGraphicBy($id: ID) {
    getGraphicBy(_id: $id) {
        model
        brand {
          name
        }
        graphics_bus {
          name
        }
        memory_capacity
        clock_speed
        boost_clock
        length
        chipset
    }
}
`;

export default GetGraphicBy;
