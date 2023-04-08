import './styles/layout.css'
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Main} from "./Main/Main";
import {AnimatePresence, useScroll} from "framer-motion";
import {useSelector} from "react-redux";
import {Loader} from "../components/Loader/Loader";
import {SmallButton} from "../components/ButtonConsultation/SmallButton";
import {ModalWrapper} from "../components/ModalWrapper/ModalWrapper";
import {ConsultationForm} from "../components/ConsultationForm/ConsultationForm";

export function Layout() {

   const showConsultation = useSelector(state => state.consultationModalReducer.show);

   const {scrollY} = useScroll();

   return (
      <>
         <div className={'wrapper'}>
            <Loader>
               <Header scrollY={scrollY}/>
               <Main/>
               <Footer/>
               <SmallButton scrollY={scrollY}/>
               <AnimatePresence>
                  {showConsultation && <ModalWrapper>
                     <ConsultationForm closable={true}/>
                  </ModalWrapper>}
               </AnimatePresence>
            </Loader>
         </div>
      </>
   )
}