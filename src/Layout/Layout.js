import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Main} from "./Main/Main";
import {useScroll} from "framer-motion";
import './styles/layout.css'
import {ConsultationModal} from "../components/ConsultationModal/ConsultationModal";
import {useSelector} from "react-redux";

export function Layout () {

   const showConsultation = useSelector(state => state.consultationModalReducer.show);

   const {scrollY} = useScroll();
   const offsetY = [0,100];

  return (
     <div className={'wrapper'}>
       <Header offsetY={offsetY} scrollY={scrollY}/>
       <Main/>
       <Footer/>
        {showConsultation ? < ConsultationModal/> : null}
     </div>
  )
}