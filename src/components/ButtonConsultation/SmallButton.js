import {motion, useTransform} from "framer-motion";
import {MdOutlineQuestionAnswer} from "react-icons/md";
import {useDispatch} from "react-redux";
import {showModal} from "../../store/slices/consultationModal";
import {useEffect, useRef} from "react";
import {toCling} from "../../animations/animation";


export function SmallButton({scrollY}) {
   const button = useRef(null);
   useEffect(()=>{
      //Активация эффекта прилипания
      toCling(button.current)
   })
   const position = [-60, 20];
   const offsetY = [100, 400];

   const styles = {
      bottom: useTransform(scrollY, offsetY, position),
   };

   const dispatch = useDispatch();
   const show = (event) => {
      event.preventDefault()
      dispatch(showModal())
   }

   return (
      <motion.div className={'buttonHolder'} style={styles}>
         <button ref={button} onClick={show} className={'consultation small'}>
            <MdOutlineQuestionAnswer size={'30px'}/>
         </button>
      </motion.div>
   )
}