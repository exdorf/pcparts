import styles from './storage.module.css';

interface StorageSVGProps {
    selectedStorageId: string;
}

export default function StorageSVG({ selectedStorageId } : StorageSVGProps ) {
    if (!selectedStorageId) {
        return null;
    }
    return  (<rect x="40" y="380" width="190" height="90" className={styles.storage}/>)
}
