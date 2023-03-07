import './styles/home.css'
import {Poster} from "../../components/Poster/Poster";
import {Questions} from "../../components/Questions/Questions";
import {ButtonConsultation} from "../../components/ButtonConsultation/ButtonConsultation";
import {CourseTile} from "../../components/CourseTile/CourseTile";
import {useSelector} from "react-redux";


export function Home () {
   const posterStyles = {
      poster:{
         alignItems: 'flex-start',
      },
      content: {
         alignSelf: 'flex-start',
         textAlign: 'left',
      }
   };
   
   const coursesCategories = useSelector(state => state.coursesListReducer.courses);

  return (
       <div className={'home'}>
         <Poster title={'Покращення зовнішності під ключ'}
                 description={'Я використовую найсучашніші і не болючі ін’єкційні техніки'}
                 style={posterStyles}
         >
            <ButtonConsultation/>
         </Poster>
          <section className={'about content'}>
             <div className="container">
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
             </div>
          </section>
          <section className={'coursesList content'}>
             <div className="container">
                <div className={'titleContainer'}>
                   <h1 className={'title'}>Категорії online курсів</h1>
                   <span className={'description'}></span>
                </div>
                <ul className="categoriesList">
                   {coursesCategories.map(item=>{
                      return (
                         <li key={item.id}>
                            <CourseTile data={item}/>
                         </li>
                      )})}
                </ul>
             </div>
          </section>
          <section className={'preferences content'}>
             <div className="container">
                <div className="titleBlock">
                   <h2 className={'title'}>Переваги навчання у Калашника Дениса</h2>
                </div>
                <div className="preferencesListBlock">
                   <ul className={'preferencesList'}>
                      <li className={'preferenceItem'}>
                         <div className="icon">
                            Icon
                         </div>
                         <div className={'description'}>
                            <h5>Групи по 17 осіб</h5>
                            <span>Викладач приділяє час кожному студенту.</span>
                         </div>
                      </li>
                      <li className={'preferenceItem'}>
                         <div className="icon">
                            Icon
                         </div>
                         <div className={'description'}>
                            <h5>Групи по 17 осіб</h5>
                            <span>Викладач приділяє час кожному студенту.</span>
                         </div>
                      </li>
                      <li className={'preferenceItem'}>
                         <div className="icon">
                            Icon
                         </div>
                         <div className={'description'}>
                            <h5>Групи по 17 осіб</h5>
                            <span>Викладач приділяє час кожному студенту.</span>
                         </div>
                      </li>
                      <li className={'preferenceItem'}>
                         <div className="icon">
                            Icon
                         </div>
                         <div className={'description'}>
                            <h5>Групи по 17 осіб</h5>
                            <span>Викладач приділяє час кожному студенту.</span>
                         </div>
                      </li>
                      <li className={'preferenceItem'}>
                         <div className="icon">
                            Icon
                         </div>
                         <div className={'description'}>
                            <h5>Групи по 17 осіб</h5>
                            <span>Викладач приділяє час кожному студенту.</span>
                         </div>
                      </li>
                      <li className={'preferenceItem'}>
                         <div className="icon">
                            Icon
                         </div>
                         <div className={'description'}>
                            <h5>Групи по 17 осіб</h5>
                            <span>Викладач приділяє час кожному студенту.</span>
                         </div>
                      </li>
                   </ul>
                </div>
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