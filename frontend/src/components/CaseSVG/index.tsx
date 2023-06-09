import styles from './case.module.css';

interface CaseSVGProps {
    selectedCaseId: string;
}

export default function CaseSVG({ selectedCaseId }: CaseSVGProps) {
    if (!selectedCaseId) {
        return null;
    }
    return <rect x="10" y="10" width="480" height="480" rx="5" ry="5" className={styles.case} />
}
