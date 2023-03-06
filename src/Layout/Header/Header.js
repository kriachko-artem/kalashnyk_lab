import './styles/header.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
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
                     Home
                  </Link>
               </li>
               <li className={'item'}>
                  <button onClick={()=>setOpened(true)} className={'navButton'}>Courses</button>
                  {opened ? <CoursesListModal close={openClose} opened={opened} /> : null}
               </li>
               <li className="item">
                  <Link to={'/contacts'}>
                     Contacts
                  </Link>
               </li>
            </ul>
         </nav>
      </motion.header>
   )
}