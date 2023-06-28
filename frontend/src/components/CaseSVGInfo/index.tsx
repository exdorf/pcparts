import client from '@/src/middleware/apollo-client';
import { useQuery } from '@apollo/client'
import GetCaseById from '@/queries/getCaseById';
import SVGTitle from '../SVGTitle';
import SVGText from '../SVGText';
import styles from './casesvginfo.module.css';

interface CaseSVGInfoProps {
    selectedCaseId: string;
}

export default function CaseSVGInfo({ selectedCaseId }: CaseSVGInfoProps) {
    const { data } = useQuery(GetCaseById, { client, variables: { id: selectedCaseId }});
    if (!data) {
        return null;
    }
    const { getCaseBy } = data;
    const [caseInfo] = getCaseBy;
    console.log('!!!', caseInfo)
    const { model, brand: { name: brandName }, form_factor: { name: factorName } } = caseInfo;
    return(
        <svg viewBox="0 0 500 80" className={styles.svg}>
            <rect x="5" y="0" width="490" height="65" className={styles.info} rx="5" ry="5" />
            <SVGTitle title={`Chosen case: ${model}`} x={250} y={20}/>
            <SVGText x={30} y={35} labelName='Brand' labelValue={brandName} />
            <SVGText x={30} y={50} labelName='Form Factory' labelValue={factorName} />
        </svg>
    )
}
