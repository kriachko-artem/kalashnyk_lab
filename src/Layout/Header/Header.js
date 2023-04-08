import './styles/header.css'
import {Link, NavLink} from "react-router-dom";
import {motion, useTransform} from "framer-motion";
import {CoursesListModal} from "../../components/CoursesListModal/CoursesListModal";
import {IoChevronDownOutline} from "react-icons/io5";


export function Header({offsetY, scrollY}) {


   return (
      <header >
         <div className="container">
            <Link to={'/'} className={'logo'}>
               <div>Logo</div>
            </Link>
            <nav>
               <ul className={'navItems'}>
                  <li className="item">
                     <NavLink to={'/'}>
                        На початок
                     </NavLink>
                  </li>
                  <li className={'item item_select'}>
                     <NavLink to={'/courses'} className={'item_select_label'}>
                        <span>Курси</span>
                        <span className={'iconHolder'}><IoChevronDownOutline color={'#222'}/></span>
                     </NavLink>
                     <CoursesListModal/>
                  </li>
                  <li className="item">
                     <NavLink to={'/contacts'}>
                        Контакти
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   )
}