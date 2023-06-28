import client from '@/src/middleware/apollo-client';
import { useQuery } from '@apollo/client'
import GetGraphicBy from '@/queries/getGraphicById';
import styles from './graphiclabel.module.css';
import SVGTitle from '../SVGTitle';
import SVGText from '../SVGText';

interface GraphicSVGLabel {
    x: number;
    y: number;
    selectedGraphicId: string;
}

export default function GraphicSVGLabel({ x, y, selectedGraphicId }: GraphicSVGLabel) {
    const { data } = useQuery(GetGraphicBy, { client, variables: { id: selectedGraphicId } });
    if (!data) {
        return null;
    }
    const { getGraphicBy } = data;
    const [graphic] = getGraphicBy;
    const { model,
        brand: { name: brandName },
        chipset,
        clock_speed,
        boost_clock,
        graphics_bus: { name: busName },
        length,
        memory_capacity } = graphic;

    return (
        <g id="graphic-label" className={styles.graphiclabel}>
            <rect x={x} y={y} width="180" height="125" stroke="blue" fill="#fff" />
            <SVGTitle title={model} x={x + 90} y={y + 15} />
            <SVGText labelName='Brand' labelValue={brandName} x={x + 5} y={y + 30} />
            <SVGText labelName='Chipset' labelValue={chipset} x={x + 5} y={y + 45} />
            <SVGText labelName='Clock Speed' labelValue={clock_speed} x={x + 5} y={y + 60} />
            <SVGText labelName='Boost Clock' labelValue={boost_clock} x={x + 5} y={y + 75} />
            <SVGText labelName='Graphics Bus' labelValue={busName} x={x + 5} y={y + 90} />
            <SVGText labelName='Length' labelValue={length} x={x + 5} y={y + 105} />
            <SVGText labelName='Memory Capacity' labelValue={memory_capacity} x={x+5} y={y+120} />
        </g>
    )
}
