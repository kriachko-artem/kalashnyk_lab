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


   const boxVariants = {
      hidden:{opacity: 0, translateY: -70,transition:{staggerChildren: 0.2, duration: 0.5}},
      visible:{opacity: 1, translateY: 0,transition:{staggerChildren: 0.2, duration: 0.5, delayChildren: 0.5}}
   };

  return (
     <section className={'poster'} style={style.poster}>
        <motion.div className="img-holder background" style={styles}>
           <div className="background-img">
              Poster
           </div>
        </motion.div>
        <div className="container">
           <motion.div className="posterContent" style={style.content}
                       variants={boxVariants}
                       initial={'hidden'}
                       animate={'visible'}
                       exit={'hidden'}
                       // transition={{delayChildren: 0.5}}
           >
              <motion.h1 className={'title'}
                         variants={boxVariants}
              >{title}</motion.h1>
              <motion.span className={'description'}
                           variants={boxVariants}
              >{description}</motion.span>
              <motion.div className="child"
                          variants={boxVariants}
              >
                 {children || null}
              </motion.div>
           </motion.div>
        </div>
     </section>
  )
}