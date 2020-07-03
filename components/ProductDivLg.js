export default function ProductDivLg(props){
  return(
    <div className="grid grid-rows-1">
      <img href={props.img.href} alt={props.img.alt}/>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.price}</h4>
        <h4></h4>
      </div>
    </div>
  )
}