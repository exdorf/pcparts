import { GraphQLObjectType } from 'graphql';
import {
    getRamBy,
    getCpusBy,
    getCasesBy,
    getGraphicsBy,
    getStoragesBy,
    getMotherboardsBy,
    getPowerSuppliersBy,
} from '.';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getRamBy,
        getCpusBy,
        getCasesBy,
        getGraphicsBy,
        getStoragesBy,
        getMotherboardsBy,
        getPowerSuppliersBy,
    },
});

export default RootQuery;
