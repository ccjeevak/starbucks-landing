import THUMBNAILS from '../../utils/thumbnails';
import './style.css'
const ClippedCircle = ({thumbIndex = 0}) => {

    return (<div className={`circle ${THUMBNAILS[thumbIndex]?.colorClass}`}/>)
}
export default ClippedCircle;