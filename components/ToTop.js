import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export default function ToTop() {

  const takeMeToTheTop = () => {

  }

  return (
    <Link href="/">
      <div onClick={takeMeToTheTop} className="cursor-pointer bg-gray-700 p-2 rounded-full bg-opacity-75 z-30 fixed bottom-0 ml-2 mb-2 transition duration-300 ease-in-out transform sm:hover:scale-125 sm:hover:bg-opacity-100 hoverShadow">
        <FontAwesomeIcon className="opacity-75 sm:hover:opacity-100" style={{ color: "#c53030" }} size="2x" icon={faArrowUp} />
      </div>
    </Link>
  )
}