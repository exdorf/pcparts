import client from '@/src/middleware/apollo-client';
import { useQuery } from '@apollo/client'
import GetStorageById from '@/queries/getStorageById';
import styles from './storagelabel.module.css';
import SVGTitle from '../SVGTitle';
import SVGText from '../SVGText';

interface StorageSVGLabelProps {
    x: number;
    y: number;
    selectedStorageId: string;
}

export default function StoragerSVGLabel({ x, y, selectedStorageId }: StorageSVGLabelProps) {
    const { data } = useQuery(GetStorageById, { client, variables: { id: selectedStorageId } });
    if (!data) {
        return null;
    }
    const { getStorageBy } = data;
    const [storage] = getStorageBy;
    const { model, brand: { name: brandName },
        type: { name: typeName },
        port: { name: portName },
        capacity,
        form_factor: { name: factorName } } = storage;
    return (
        <g id="storage-label" className={styles.storagelabel}>
            <rect x={x} y={y} width="150" height="100" stroke="blue" fill="#fff" />
            <SVGTitle title={model} x={x + 75} y={y + 15} />
            <SVGText labelName="Brand" labelValue={brandName} x={x + 5} y={y + 30} />
            <SVGText labelName="Type" labelValue={typeName} x={x + 5} y={y + 45} />
            <SVGText labelName="Port" labelValue={portName} x={x + 5} y={y + 60} />
            <SVGText labelName="Capacity" labelValue={capacity} x={x + 5} y={y + 75} />
            <SVGText labelName="Form Factor" labelValue={factorName} x={x + 5} y={y + 90} />
        </g>
    )
}
