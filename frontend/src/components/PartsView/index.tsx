import styles from './partsview.module.css';
import SelectedParts from '@/type/SelectedParts';
import CpuSVG from '../CpuSVG';
import GraphicSVG from '../GraphicSVG';
import PowerSupplierSVG from '../PowerSupplierSVG';
import StorageSVG from '../Storage';
import CaseSVG from '../CaseSVG';
import RamSVG from '../RamSVG';
import RamSVGLabel from '../RamSVGLabel';
import CPUSVGLabel from '../CPUSVGLabel';
import GraphicSVGLabel from '../GraphicSVGLabel';
import PowerSupplierSVGLabel from '../PowerSupplierSVGLabel';
import StorageSVGLabel from '../StorageSVGLabel';


interface PartsViewProps {
    selectedParts: SelectedParts;
}

function PartsView({ selectedParts }: PartsViewProps) {

    const { selectedRamId, selectedCpuId, selectedGraphicId, selectedPowerSupplierId, selectedStorageId, selectedCaseId } = selectedParts;
    console.log('!!!', { selectedGraphicId })
    
    return (<div className={styles.view}>
        <svg viewBox="0 0 500 500" className={styles.svg}>
            <rect x="5" y="5" width="490" height="490" rx="5" strokeWidth="3" ry="5" stroke="#333" fill="#fff" />
            <CaseSVG selectedCaseId={selectedCaseId} />
            <RamSVG selectedRamId={selectedRamId} />
            <CpuSVG selectedCpuId={selectedCpuId} />
            <GraphicSVG selectedGraphicId={selectedGraphicId} />
            <PowerSupplierSVG selectedPowerSupplierId={selectedPowerSupplierId} />
            <StorageSVG selectedStorageId={selectedStorageId} />
   
            {selectedRamId && (<RamSVGLabel x={55} y={65} selectedRamId={selectedRamId}/>)}
            {selectedCpuId && (<CPUSVGLabel x={130} y={250} selectedCpuId={selectedCpuId} /> )}
            {selectedGraphicId && <GraphicSVGLabel x={200} y={60} selectedGraphicId={selectedGraphicId} />}
            {selectedPowerSupplierId && <PowerSupplierSVGLabel x={330} y={60} selectedPowerSupplierId={selectedPowerSupplierId} />}
            {selectedStorageId && <StorageSVGLabel x={150} y={385} selectedStorageId={selectedStorageId} />}
        </svg>
       
    </div>)
}


export default PartsView;
