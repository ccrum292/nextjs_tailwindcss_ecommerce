import FiveStars from "../components/FiveStars"

export default function ProductDivSmHorz(props) {

  return (
    <div className="cursor-pointer flex flex-row  justify-start bg-gray-800 rounded-lg overflow-hidden m-2  sm:max-w-xs transition duration-700 ease-in-out transform  hover:scale-105">
      <img className="self-center object-cover h-20 w-25" src={props.img.src} alt={props.img.alt} />
      <div className="flex flex-col justify-center w-2/3">
        <h3 className="jost text-gray-300 ml-2 text-xl font-bold overflow-x-hidden truncate">{props.title}</h3>
        <div className="flex  justify-start items-center">
          <h4 className="jost text-gray-300 mt-2 ml-2 self-end text-xl font-bold truncate w-1/2">${props.price}</h4>
          <div className="transform ">
            <FiveStars tooltip={props.tooltip} rating={props.rating} size="1x" orientHorz={true} />
          </div>
        </div>
      </div>
    </div>
  )
}