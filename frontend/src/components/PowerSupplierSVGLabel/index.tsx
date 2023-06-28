import client from '@/src/middleware/apollo-client';
import { useQuery } from '@apollo/client'
import GetPowerSupplierBy from '@/queries/getPowerSupplierBy';
import styles from './powersupplierlabel.module.css';
import SVGTitle from '../SVGTitle';
import SVGText from '../SVGText';

interface PowerSupplierSVGLabelProps {
    x: number;
    y: number;
    selectedPowerSupplierId: string;
}

export default function PowerSupplierSVGLabel({ x, y, selectedPowerSupplierId } : PowerSupplierSVGLabelProps) {
    const { data } = useQuery(GetPowerSupplierBy, { client, variables: { id: selectedPowerSupplierId }});
    if (!data) {
        return null;
    }
    const { getPowerSupplierBy } = data;
    const [supplier] = getPowerSupplierBy;
    const { model, brand: { name: brandName }, form_factor: { name: factorName } } = supplier;
    return (
        <g id="powersupplier-label" className={styles.powerlabel}>
            <rect x={x} y={y} width="160" height="70" stroke="blue" fill="#fff" />
            <SVGTitle x={x+90} y={y+15} title={model} />
            <SVGText x={x+5} y={y+30} labelName="Brand" labelValue={brandName}/>
            <SVGText x={x+5} y={y+45} labelName="Form Factor" labelValue={factorName}/>
            <SVGText x={x+5} y={y+60} labelName="Brand" labelValue={brandName}/>
        </g>
    )
}
