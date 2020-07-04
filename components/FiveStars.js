import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarNoFill } from '@fortawesome/free-regular-svg-icons'
import returnNumberOfStars from "../lib/js/returnNumberOfStars"


export default function FiveStars(props){
  const generateStars = (props) => {
    const starsObject = returnNumberOfStars(props)
    const returnArray = []
    for(let i=0; i<starsObject.numberOfFullStars; i++){
      returnArray.push(
        <FontAwesomeIcon key={`${i}faStar`} style={{color:"#c53030"}} size="2x" icon={faStar}/>
      )
    }
    for(let i=0; i<starsObject.numberOfHalfStars; i++){
      returnArray.push(
        <FontAwesomeIcon key={`${i}faStarHalfAlt`} style={{color:"#c53030"}} size="2x" icon={faStarHalfAlt}/>
      )
    }
    for(let i=0; i<starsObject.numberOfEmptyStars; i++){
      returnArray.push(
        <FontAwesomeIcon key={`${i}faStarNoFill`} style={{color:"#c53030"}} size="2x" icon={faStarNoFill}/>
      )
    }

    return returnArray
  }

  return(
    <div className="m-2 tooltip flex justify-center">
      <div>
        {generateStars(props)}
      </div>
      <div className="tooltip-text">
        {props.tooltip ? props.tooltip: <div></div>}
      </div>
    </div>

  )
}