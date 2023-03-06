

export function Dropdown ({onChecked ,options}) {

  return (
     <ul className="dropdown">
           {options.map((item, index)=>(
              <li onClick={()=>onChecked(item)}  key={index}>{item.label}</li>
           ))}
     </ul>
  )
}