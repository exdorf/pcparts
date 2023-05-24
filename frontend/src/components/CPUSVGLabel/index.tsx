import client from '@/src/middleware/apollo-client';
import { useQuery } from '@apollo/client';
import GetCpuById from '@/queries/getCpuById';
import styles from './cpulabel.module.css';
import SVGTitle from '../SVGTitle';
import SVGText from '../SVGText';

interface CPUSVGLabel{
    x: number;
    y: number;
    selectedCpuId: string;
}

export default function CPUSVGLabel({ x, y, selectedCpuId } : CPUSVGLabel ) {
    const { data } = useQuery(GetCpuById, { client, variables: { id: selectedCpuId }});
    if (!data) {
        return null;
    }
    const { getCpuBy } = data;
    const [cpu] = getCpuBy;
    const { model, brand: { name: brandName}, socket: { name: socketName}, tdp, smt, ram_max, ram_type: { name: ramType} } = cpu;
    return (
        <g id="cpu-label" className={styles.cpulabel}>
            <rect x={x} y={y} width="150" height="115" stroke="blue" fill="#fff" />
            <SVGTitle title={model} x={x+75} y={y+15} />
            <SVGText x={x+5} y={y+30} labelName="Brand" labelValue={brandName} />
            <SVGText x={x+5} y={y+45} labelName="Socket" labelValue={socketName} />
            <SVGText x={x+5} y={y+60} labelName="TDP" labelValue={tdp} />
            <SVGText x={x+5} y={y+75} labelName="SMT" labelValue={smt ? 'Yes' : 'No'} />
            <SVGText x={x+5} y={y+90} labelName="Ram Type" labelValue={ramType} />
            <SVGText x={x+5} y={y+105} labelName="Ram Max" labelValue={ram_max} />
        </g>
    )
}
