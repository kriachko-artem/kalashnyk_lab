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
import {Menu} from "../components/Menu/Menu";
import {CoursesMenu} from "../components/Menu/CoursesMenu/CoursesMenu";

export function Layout() {
   //Controlling page scroll by state
   const scroll = useSelector(state => state.scrollReducer.active);
   document.querySelector('body').style.overflow = scroll ? 'visible' : 'hidden';

   const isMenuShowed = useSelector(state => state.menuReducer.show)

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
                  {isMenuShowed &&
                     <ModalWrapper>
                        <Menu children={<CoursesMenu/>}/>
                     </ModalWrapper>}
               </AnimatePresence>
            </Loader>
         </div>
      </>
   )
}