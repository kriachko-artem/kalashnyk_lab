import './styles/home.css'
import {Poster} from "../Courses/Poster/Poster";
import {Questions} from "../../components/Questions/Questions";


export function Home () {

  return (
       <div className={'home'}>
         <Poster title={'Покращення зовнішності під ключ'}
                 description={'Я використовую найсучашніші і не болючі ін’єкційні техніки'}
         />
          <section className={'about content'}>
             <div className={'titleContainer'}>
                <h1 className={'title'}>Привіт, мене звати Калашник Денис</h1>
                <span className={'description'}></span>
                <hr className={'short semiBold'}/>
             </div>
             <div className="textContent">
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
             </div>
          </section>
          <section className={'questions content'}>
             <div className={'titleContainer'}>
                <h1 className={'title'}>Найчастіші запитання клієнтів та відповіді на них</h1>
                <span className={'description'}></span>
             </div>
             <Questions />
          </section>
       </div>
  )
}