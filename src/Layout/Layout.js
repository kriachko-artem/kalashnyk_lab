import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Main} from "./Main/Main";
import {AnimatePresence, useScroll} from "framer-motion";
import './styles/layout.css'
import {ConsultationModal} from "../components/ConsultationModal/ConsultationModal";
import {useSelector} from "react-redux";
import {Loader} from "../components/Loader/Loader";
import {SmallButton} from "../components/ButtonConsultation/SmallButton";

export function Layout() {

   const showConsultation = useSelector(state => state.consultationModalReducer.show);

   const {scrollY} = useScroll();
   const offsetY = [0, 100];

   return (
      <>
         <div className={'wrapper'}>
            <Loader>
               <Header offsetY={offsetY} scrollY={scrollY}/>
               <Main/>
               <Footer/>
               <SmallButton offsetY={offsetY} scrollY={scrollY}/>
               <AnimatePresence>
                  {showConsultation && < ConsultationModal/>}
               </AnimatePresence>
            </Loader>
         </div>
      </>
   )
}