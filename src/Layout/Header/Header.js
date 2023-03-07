import './styles/header.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {IoChevronDownOutline} from "react-icons/io5";
import {motion, useTransform} from "framer-motion";
import {CoursesListModal} from "../../components/CoursesListModal/CoursesListModal";


export function Header({offsetY, scrollY}) {

   const headerSizes = [100, 50];

   const styles = {
      height: useTransform(scrollY, offsetY, headerSizes),
   };
   const [opened,setOpened] = useState(false);

   const openClose = () => {
     setOpened(!opened)
   }

   return (
      <motion.header style={styles}>
         <Link to={'/'} className={'logo'}>
            <div>Logo</div>
         </Link>
         <nav>
            <ul className={'navItems'}>
               <li className="item">
                  <Link to={'/'}>
                     На початок
                  </Link>
               </li>
               <li onClick={()=>setOpened(true)} className={'item item_select'}>Курси
                  <span className={'iconHolder'}><IoChevronDownOutline /></span>
                  {opened ? <CoursesListModal close={openClose} opened={opened} /> : null}
               </li>
               <li className="item">
                  <Link to={'/contacts'}>
                     Контакти
                  </Link>
               </li>
            </ul>
         </nav>
      </motion.header>
   )
}