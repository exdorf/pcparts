import client from '@/src/middleware/apollo-client';
import { useQuery } from '@apollo/client'
import GetMotherboardsBy from '@/queries/getMotherboardsById';
import SVGTitle from '../SVGTitle';
import SVGText from '../SVGText';
import styles from './motherboard.module.css';

interface MotherboardSVGInfoProps {
    selectedMotherboardId: string;
}

export default function MotherboardSVGInfo({ selectedMotherboardId }: MotherboardSVGInfoProps) {
    const { data } = useQuery(GetMotherboardsBy, { client, variables: { id: selectedMotherboardId } });
    if (!data) {
        return null;
    }
    const { getMotherboardsBy } = data;
    const [motherboard] = getMotherboardsBy;
    console.log('!!!', motherboard)
    const { model, brand: { name: brandName }, chipset: { name: chipsetName }, form_factor: { name: formName }, graphics_bus: { name: graphicsName }, ram_slots, socket: { name: socketName } } = motherboard;
    return (
        <svg viewBox="0 0 500 130" className={styles.svg}>
            <rect x="5" y="0" width="490" height="125" className={styles.info} rx="5" ry="5" />
            <SVGTitle title={`Chosen motherboard: ${model}`} x={250} y={20} />
            <SVGText x={30} y={35} labelName="Brand" labelValue={brandName} />
            <SVGText x={30} y={50} labelName="Chipset" labelValue={chipsetName} />
            <SVGText x={30} y={65} labelName="Form Factor" labelValue={formName} />
            <SVGText x={30} y={80} labelName="Graphics Bus" labelValue={graphicsName} />
            <SVGText x={30} y={95} labelName="Ram Slots" labelValue={ram_slots} />
            <SVGText x={30} y={110} labelName="Socket" labelValue={socketName} />
        </svg>
    )
}
