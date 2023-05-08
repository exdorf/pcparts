import styles from './graphic.module.css';

interface GraphicSVGProps {
    selectedGraphicId: string;
}

export default function GraphicSVG({ selectedGraphicId }: GraphicSVGProps) {
    if (!selectedGraphicId) {
        return null;
    }
    return (<rect x="320" y="50" width="80" height="160" className={styles.graphic} />);
}
