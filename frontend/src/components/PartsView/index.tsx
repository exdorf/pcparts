import styles from './partsview.module.css';
import SelectedParts from '@/type/SelectedParts';
import RamSVG from '../RamSVG';
import CpuSVG from '../CpuSVG';
import GraphicSVG from '../GraphicSVG';
import PowerSupplierSVG from '../PowerSupplierSVG';
import StorageSVG from '../Storage';
import CaseSVG from '../CaseSVG';
import RamLabel from '../RamLabel';


interface PartsViewProps {
    selectedParts: SelectedParts;
}

function PartsView({ selectedParts }: PartsViewProps) {

    const { selectedRamId, selectedCpuId, selectedGraphicId, selectedPowerSupplierId, selectedStorageId, selectedCaseId } = selectedParts;

    
    return (<div className={styles.view}>
        <svg viewBox="0 0 500 500" className={styles.svg}>
            <rect x="5" y="5" width="490" height="490" rx="5" strokeWidth="3" ry="5" stroke="#333" fill="#fff" />
            <CaseSVG selectedCaseId={selectedCaseId} />
            <RamSVG selectedRamId={selectedRamId} />
            <CpuSVG selectedCpuId={selectedCpuId} />
            <GraphicSVG selectedGraphicId={selectedGraphicId} />
            <PowerSupplierSVG selectedPowerSupplierId={selectedPowerSupplierId} />
            <StorageSVG selectedStorageId={selectedStorageId} />
        </svg>
        <RamLabel selectedRamId={selectedRamId}/>
    </div>)
}


export default PartsView;
