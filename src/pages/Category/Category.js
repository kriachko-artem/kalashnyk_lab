import './styles/category.css'
import {useParams} from "react-router";
import {Preferences} from "../../components/Preferences/Preferences";
import {Poster} from "../../components/Poster/Poster";
import {useSelector} from "react-redux";
import {NotFound} from "../NotFound/NotFound";
import {CourseTile} from "../../components/CourseTile/CourseTile";

export function Category() {
   const {category} = useParams();
   const data = useSelector(state => state.coursesListReducer.courses)
      .find(item=>item.path === category)

   return !data ? <NotFound /> :
      <>
         <Poster title={data.title} description={data.description}/>
         <section className={'coursesList content'}>
            <div className="container">
               <div className={'titleContainer'}>
                  <h1 className={'title'}>Доступні курси</h1>
                  <span className={'description'}></span>
               </div>
               <ul className="coursesList_list">
                  {data.courses.map(item => {
                     return (
                        <li className={'item'} key={item.id}>
                           <CourseTile data={item}/>
                        </li>
                     )
                  })}
               </ul>
            </div>
         </section>
         <Preferences/>
      </>
}