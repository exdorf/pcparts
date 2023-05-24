import client from '@/src/middleware/apollo-client';
import { useQuery } from '@apollo/client';
import styles from './label.module.css';
import GetRamById from '@/queries/getRamById';
import SVGTitle from '../SVGTitle';
import SVGText from '../SVGText';

interface RamSVGLabelProps {
    x: number;
    y: number;
    selectedRamId: string;
}

export default function RamSVGLabel({ x, y, selectedRamId } : RamSVGLabelProps) {
    const { data } = useQuery(GetRamById, { client, variables: { id: selectedRamId }});
    if (!data) {
        return null;
    }
    const { getRamBy } = data;
    const [ram] = getRamBy;
    const { model, first_word_latency, brand: { name: brandName }, cas_latency, capacity } = ram;
    return (
        <g id="ram-label" className={styles.ramlabel}>
            <rect x={x} y={y} width="200" height="85" stroke="blue" fill="#fff" />
            <SVGTitle x={x+100} y={y+15} title={model}/>
            <SVGText x={x+5} y={y+30} labelName="Brand" labelValue={brandName} />
            <SVGText x={x+5} y={y+45} labelName="First World Latency" labelValue={first_word_latency} />
            <SVGText x={x+5} y={y+60} labelName="Cas Latency" labelValue={cas_latency} />
            <SVGText x={x+5} y={y+75} labelName="Capacity" labelValue={capacity} />
        </g>
    )
}
