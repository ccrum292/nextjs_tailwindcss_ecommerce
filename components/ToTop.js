import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


export default function ToTop(){

  const takeMeToTheTop = () => {

  }

  return(
    <div onClick={takeMeToTheTop} className="cursor-pointer bg-gray-700 p-2 rounded-full bg-opacity-75 z-30 fixed bottom-0 ml-2 mb-2 transition duration-300 ease-in-out transform hover:scale-125 hover:bg-opacity-100">
      <FontAwesomeIcon className="opacity-75 hover:opacity-100" style={{ color: "#c53030" }} size="2x" icon={faArrowUp} />

    </div>
  )
}