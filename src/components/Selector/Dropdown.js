import {motion} from "framer-motion";

export function Dropdown ({onChecked ,options}) {

  return (
     <motion.ul className="dropdown"
                initial={{height: 0}}
                animate={{height: 'auto'}}
                exit={{height: 0}}
                transition={{duration: 0.2, ease: 'easeOut'}}
     >
           {options.map((item, index)=>(
              <li onClick={()=>onChecked(item)}  key={index}>{item.label}</li>
           ))}
     </motion.ul>
  )
}