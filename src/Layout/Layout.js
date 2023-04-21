import './styles/layout.css'
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Main} from "./Main/Main";
import {AnimatePresence, useScroll} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../components/Loader/Loader";
import {SmallButton} from "../components/ButtonConsultation/SmallButton";
import {ModalWrapper} from "../components/ModalWrapper/ModalWrapper";
import {ConsultationForm} from "../components/ConsultationForm/ConsultationForm";
import {Menu} from "../components/Menu/Menu";
import {hideMenu, showMenu} from "../store/slices/menu";

export function Layout() {
   //Controlling page scroll by state
   const scroll = useSelector(state => state.scrollReducer.active);
   document.querySelector('body').style.overflow = scroll ? 'visible' : 'hidden';

   const isMenuShowed = useSelector(state => state.menuReducer.show)
   const dispatch = useDispatch()

   const closeMenu = () => {
      dispatch(hideMenu())
   }


   const showConsultation = useSelector(state => state.consultationModalReducer.show);

   const {scrollY} = useScroll();

   const coursesMenu = <div>Hello</div>;

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
               {isMenuShowed && <Menu onclose={closeMenu} children={coursesMenu}/>}
            </Loader>
         </div>
      </>
   )
}