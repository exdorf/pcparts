import styles from './svgtext.module.css';

interface SVGTextProps {
    x: number;
    y: number;
    labelName: string;
    labelValue: string;
}

export default function SVGText({ x, y, labelName, labelValue }: SVGTextProps) {
    return (<text x={x} y={y} className={styles.text}><tspan className={styles.span}>{labelName}:</tspan>{labelValue}</text>); 
}
