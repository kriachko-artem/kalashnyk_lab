import './styles/header.css'
import {Link} from "react-router-dom";
import WheelIndicator from "wheel-indicator";
import {useEffect, useState} from "react";




export function Header() {

   const [direction,setDirection] = useState('');
   useEffect(()=>{
      new WheelIndicator({
         elem: document.querySelector('main'),
         callback: function(e){
            if (e.direction !== direction){
               setDirection(e.direction)
            }
         },
         preventMouse: false
      });
   },)

   return (
      <header className={direction}>
         <Link to={'/'} className={'logo'}>
            <div>Logo</div>
         </Link>
         <nav>
            <Link to={'/'}>
               Home
            </Link>
            <Link to={'/courses'}>
               Courses
            </Link>
            <Link to={'/contacts'}>
               Contacts
            </Link>
         </nav>
      </header>
   )
}