import styles from './ramsvg.module.css';

interface RamSVGProps {
    selectedRamId: string;
}

export default function RamSVG({ selectedRamId }: RamSVGProps) {
    if (!selectedRamId) {
        return null;
    }
    return <rect x="40" y="50" width="60" height="30" className={styles.ram} />
}
