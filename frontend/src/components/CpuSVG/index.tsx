import styles from './cpusvg.module.css';

interface CpuSVGProps {
    selectedCpuId: string;
}

export default function CpuVG({ selectedCpuId } : CpuSVGProps) {
    if (!selectedCpuId)  {
        return null;
    }
    return  <rect x="110" y="240" width="110" height="110" className={styles.cpu} />
}
