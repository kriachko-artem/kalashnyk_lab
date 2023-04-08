import './styles/poster.css'
import {motion, useScroll, useTransform} from "framer-motion";


export function Poster ({title = '', description = '', style = {}, children}) {

   const {scrollY} = useScroll();
   const offsetY = [-150, 300];
   const borderRadius = ['0%', '50%'];
   const styles = {
      borderBottomLeftRadius: useTransform(scrollY, offsetY, borderRadius),
      borderBottomRightRadius: useTransform(scrollY, offsetY, borderRadius),
   };

  return (
     <section className={'poster'} style={style.poster}>
        <motion.div className="img-holder background" style={styles}>
           <div className="background-img">
              Poster
           </div>
        </motion.div>
        <div className="container">
           <div className="posterContent" style={style.content}>
              <h1 className={'title'}>{title}</h1>
              <span className={'description'}>{description}</span>
              <div className="child">
                 {children || null}
              </div>
           </div>
        </div>
     </section>
  )
}