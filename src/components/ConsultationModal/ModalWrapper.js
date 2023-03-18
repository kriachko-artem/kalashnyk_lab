import './styles/consultationModal.css'
import {motion} from "framer-motion";
import {useEffect} from "react";
import {ConsultationModal} from "./ConsultationModal";


export function ModalWrapper () {

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
        <ConsultationModal closable={true}/>
     </motion.div>
  )
}