import './styles/menu.css'
import {useOutsideClick} from "../../hooks/useOutsideClick";
import {motion} from "framer-motion";
import {hideMenu} from "../../store/slices/menu";
import {useDispatch} from "react-redux";

export function Menu ({onclose, children}) {
   const dispatch = useDispatch();
   const ref = useOutsideClick(()=>closeMenu());
   const closeMenu = ()=>{
      dispatch(hideMenu())
   };

   const transition = (bounce) =>({
      type: "spring",
      bounce
   });

  return (
        <motion.div className="menu" ref={ref}
                    initial={{width: 0}}
                    animate={{
                       width: '60%',
                       transition: transition(0.25)
                    }}
                    exit={{width: 0, transition: transition(0)}}
        >
           <div className="menu-content">
              {children && children}
           </div>
        </motion.div>
  )
}