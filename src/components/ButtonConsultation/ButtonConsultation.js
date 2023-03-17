import './styles/buttonConsultation.css'
import {useDispatch} from "react-redux";
import {showModal} from "../../store/slices/consultationModal";
import { motion, useTransform} from "framer-motion";
import {MdOutlineQuestionAnswer} from "react-icons/md";

export function ButtonConsultation (props) {

   const headerSizes = [100, 50];

   // const styles = {
   //    height: useTransform(scrollY, offsetY, headerSizes),
   // };
   
   const dispatch = useDispatch();
   const show = ()=> {
      dispatch(showModal())
   }

  return (
        <motion.button onClick={show} className={`consultation ${props.small ? 'small' : ''}`} style={{...props.style}}>
           {props.small ? <MdOutlineQuestionAnswer size={'30px'}/> : <span>Безкоштовна консультація</span>}
        </motion.button>
  )
}