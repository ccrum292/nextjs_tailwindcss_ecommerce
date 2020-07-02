import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


function SearchDiv(props){
  return (
    <div className="fixed top-0 bg-black z-10 min-w-full min-h-full">
      <div className="flex justify-between">
        <div className="p-2" onClick={()=> {props.setSearchDivOpen(!props.searchDivOpen)}}>
        <FontAwesomeIcon style={{color:"#e2e8f0"}} size="2x" icon={faArrowLeft}/>
        </div>
        <div className="p-2 flex-grow bg-red-500">

        </div>
        <div className="p-2 bg-red-500">
        <FontAwesomeIcon style={{color:"#e2e8f0"}} size="2x" icon={faSearch}/>
        </div>
      </div>
    </div>
  )
}

export default SearchDiv;