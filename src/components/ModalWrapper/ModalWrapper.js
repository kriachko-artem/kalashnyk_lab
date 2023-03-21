import './styles/modalWrapper.css'
import {motion} from "framer-motion";
import {useEffect} from "react";

export function ModalWrapper ({children}) {

   useEffect(() => {
      document.querySelector('body').style.overflow = 'hidden'
      return () => {
         document.querySelector('body').style.overflowY = 'visible'
      }
   })

  return (
     <motion.div className={'modalWrapper'}
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 exit={{opacity: 0}}>
        {children}
     </motion.div>
  )
}