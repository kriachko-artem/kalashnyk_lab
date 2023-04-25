import './styles/poster.css'
import {motion, useScroll, useTransform} from "framer-motion";


export function Poster ({title = '', description = '', style = {}, children}) {

   const {scrollY} = useScroll();
   const startOffset = (windowWidth)=>{
      if (windowWidth < 500) return -800
       else if (windowWidth < 900) return -300;
       else if (windowWidth < 1280) return -250;
       else if (windowWidth > 1280) return -200
   };
   // console.log("startOffset(window.innerWidth)",startOffset(window.innerWidth))
   const offsetY = [startOffset(window.innerWidth), 500];
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