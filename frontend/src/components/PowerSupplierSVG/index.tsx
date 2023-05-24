import styles from './powersupplier.module.css';

interface PowerSupplierSVG {
    selectedPowerSupplierId: string;
}

export default function PowerSupplierSVG({ selectedPowerSupplierId } : PowerSupplierSVG) {
    if (!selectedPowerSupplierId) {
        return null;
    }
    return  (<rect x="430" y="50" width="40" height="250" className={styles.power} id="powersupplier"/>);
}
