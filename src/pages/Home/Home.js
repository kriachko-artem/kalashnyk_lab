import './styles/home.css'
import {Poster} from "../../components/Poster/Poster";
import {Questions} from "../../components/Questions/Questions";
import {ButtonConsultation} from "../../components/ButtonConsultation/ButtonConsultation";
import {Preferences} from "../../components/Preferences/Preferences";
import {CategoriesList} from "../../components/CategoriesList/CategoriesList";
import {motion} from "framer-motion";


export function Home () {
   const posterStyles = {
      content: {
         alignSelf: 'flex-start',
         textAlign: 'left',
      }
   };

   const boxVariants = {
      hidden: {opacity: 0,transition:{duration: 0}},
      visible: {opacity: 1, translateY: 0,
         transition:{
            staggerChildren: 0.35,
            duration: 2.5,
            ease: [.25, .86, .14, 1]
         }
      }
   };
   

  return (
       <div className={'home'}>
         <Poster title={'Покращення зовнішності під ключ'}
                 description={'Я використовую найсучашніші і не болючі ін’єкційні техніки'}
                 style={posterStyles}
         >
            <ButtonConsultation/>
         </Poster>
          <section className={'about content'}>
             <motion.div className="container"
                         variants={boxVariants}
                         initial={'hidden'}
                         whileInView={'visible'}
                         viewport={{ once: true }}
             >
                <motion.div className="img-holder"
                            variants={boxVariants}
                >

                </motion.div>
                <div className={'textBlock'}>
                   <motion.h1 className={'title'}
                              variants={boxVariants}
                   >Привіт, мене звати Калашник Денис</motion.h1>
                   <motion.div className="textContent"
                               variants={boxVariants}
                   >
                      <p>
                         Я - лікар лицьової косметології зі спеціалізацією на ботулінотерапії, контурній пластиці обличчя та нитковому ліфтингу.
                         Мої навички та досвід дозволяють мені досягати вражаючих результатів у покращенні вигляду і самопочуття моїх пацієнтів.
                      </p>
                      <p>
                         Я працюю з найновішими технологіями та матеріалами, щоб забезпечити максимально природний та естетичний вигляд.
                         Моя мета - зробити так, щоб кожен мій пацієнт відчував себе більш впевненим та задоволеним своїм виглядом.
                      </p>
                      <p>
                         Я завжди прагну підтримувати довгострокові стосунки зі своїми клієнтами, забезпечуючи їм якісну та індивідуальну опіку в будь-який момент.
                      </p>
                   </motion.div>
                </div>
             </motion.div>
          </section>
          <div className="backgroundSection">
             <Preferences />
             <CategoriesList to={'/courses/'}/>
             <section className={'questions content'}>
                <div className={'titleContainer'}>
                   <h1 className={'title'}>Найчастіші запитання клієнтів та відповіді на них</h1>
                   <span className={'description'}></span>
                </div>
                {/*<Questions />*/}
             </section>
          </div>
       </div>
  )
}