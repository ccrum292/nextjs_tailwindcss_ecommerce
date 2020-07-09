import FiveStars from "../components/FiveStars"

export default function ProductDivLgVert(props){
  return(
    <div className="cursor-pointer shadowClass flex flex-col justify-center bg-gray-800 overflow-hidden rounded-lg m-2 sm:w-80 w-100 transition duration-700 ease-in-out transform  hover:scale-105">
      <img className="object-cover h-75 sm:h-60" src={props.img.src} alt={props.img.alt}/>
      <div className="flex flex-col">
        <h3 className="jost text-gray-300 m-2 text-xl font-bold overflow-x-hidden truncate">{props.title}</h3>
        <div className="flex flex-row justify-between items-center">
          <h4 className="jost text-gray-300 m-2 self-end text-xl font-bold overflow-x-hidden truncate w-1/3">${props.price}</h4>
          <FiveStars tooltip={props.tooltip} rating={props.rating} size="2x"/>
        </div>
      </div>
    </div>
  )
}