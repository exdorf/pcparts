import styles from './svgtitle.module.css';

interface SVGTitleProps {
    x: number;
    y: number;
    title: string;
}

export default function SVGTitle({x,y, title}: SVGTitleProps) {
    return   <text x={x} y={y} textAnchor='middle' className={styles.title} >{title}</text>
}
