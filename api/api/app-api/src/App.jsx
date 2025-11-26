import { productos } from "./data";

function Producto ({produ , size}){
  return(
   <div>
    <div>
       <h3>{produ.name}</h3>
        <p>{produ.id}</p>
    </div>
    <div>
      <img 
            src={produ.image}
            alt={produ.name} 
            width={size}
            height={size}
            />
    </div>
   </div>
  )
}
export default function Profile (){
  return(
    productos.map(Producto => (
       <Producto
       key={produ.id}
       produ={{
        name : produ.name,
        id :produ.id,
        image : produ.image
       }}
       size={50}
       />
    ))
  )
}