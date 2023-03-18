import './styles/layout.css'
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Main} from "./Main/Main";
import {AnimatePresence, useScroll} from "framer-motion";
import {useSelector} from "react-redux";
import {Loader} from "../components/Loader/Loader";
import {SmallButton} from "../components/ButtonConsultation/SmallButton";
import {ModalWrapper} from "../components/ConsultationModal/ModalWrapper";

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
                  {showConsultation && <ModalWrapper/>}
               </AnimatePresence>
            </Loader>
         </div>
      </>
   )
}