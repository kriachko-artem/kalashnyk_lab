import {motion} from "framer-motion";

export function Dropdown ({onChecked, options}) {

   const boxVariant = {
      hidden: {
         height: 0, //move out of the site
      },
      visible: {
         height: 'auto', // bring it back to normal
         transition: {
            delay: 0,
            // when: "beforeChildren", //use this instead of delay
            staggerChildren: 0.1, //apply stagger on the parent tag
         },
      },
   };

   const listVariant = {
      hidden: {
         x: -10, //move out of the site
         opacity: 0,
      },
      visible: {
         x: 0, // bring it back to normal
         opacity: 1,
      },
   };




   return (
     <motion.ul className="dropdown"
                variants={boxVariant}
                animate="visible"
                initial="hidden"
                exit={"hidden"}
     >
           {options.map((item, index)=>(
              <motion.li onClick={()=>onChecked(item)} key={index}
                         variants={listVariant}
              >
                 {item.label}</motion.li>
           ))}
     </motion.ul>
  )
}