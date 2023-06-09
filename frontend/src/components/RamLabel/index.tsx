import { useQuery } from '@apollo/client';
import client from '@/src/middleware/apollo-client';
import GetRamById from '@/queries/getRamById';

interface RamLabelProps {
    selectedRamId: string;
}


export default function RamLabel({ selectedRamId }: RamLabelProps) {
    const { data } = useQuery(GetRamById, { client, variables: { id: selectedRamId } })
    if (!data) {
        return null;
    }
    const { getRamBy } = data;
    const [ram] = getRamBy;
    return (
        <div>
            <h3>Ram label</h3>
            <div>Model: {ram.model}</div>
            <div>Type: {ram.type.name}</div>
            <div>Brand: {ram.brand.name}</div>
            <div>Modules: {ram.modules}</div> 
            <div>Capacity: {ram.capacity}</div> 
            <div>Cas Latency: {ram.cas_latency}</div>
            <div>First Word Latency: {ram.first_word_latency}</div>
        </div>
    )
}
