import FiveStars from "../components/FiveStars"

export default function ProductDivLg(props){
  return(
    <div className="cursor-pointer flex flex-col justify-center bg-gray-800 overflow-hidden rounded-lg m-2 w-full sm:max-w-xs transition duration-700 ease-in-out transform  hover:scale-105">
      <img className="object-cover" src={props.img.src} alt={props.img.alt}/>
      <div className="flex flex-col">
        <h3 className="jost text-gray-300 m-2 text-xl font-bold">{props.title}</h3>
        <div className="flex flex-row justify-between items-center">
          <h4 className="jost text-gray-300 m-2 self-end text-xl font-bold">${props.price}</h4>
          <FiveStars tooltip={props.tooltip} rating={props.rating}/>
        </div>
      </div>
    </div>
  )
}