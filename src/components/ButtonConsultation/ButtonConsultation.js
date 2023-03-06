import './styles/buttonConsultation.css'
import {useDispatch} from "react-redux";
import {showModal} from "../../store/slices/consultationModal";

export function ButtonConsultation ({style}) {

   const dispatch = useDispatch();

   const show = (event)=> {
      event.preventDefault()
      dispatch(showModal())
   }

  return (
     <button onClick={show} className={'consultation'} style={style}>
        Безкоштовна консультація
     </button>
  )
}