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
import {motion} from "framer-motion";

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
               <motion.div className={'animation-container'}
                           initial={{opacity: 0}}
                           animate={{opacity: 1, transition: {duration: 0.6, ease: 'easeOut', delay: 0.6}}}
                           exit={{opacity: 0, transition: {duration: 0.4, ease: 'easeIn'}}}
               >
                  <Main/>
                  <Footer/>
               </motion.div>
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