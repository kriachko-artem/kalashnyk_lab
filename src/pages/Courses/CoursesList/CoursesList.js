import './styles/coursesList.css'
import {CourseTile} from "../../../components/CourseTile/CourseTile";
import {useSelector} from "react-redux";

export function CoursesList () {

   const coursesList = useSelector(state => state.coursesListReducer.courses);

  return (
       <section className={'coursesList content'}>
          <div className={'titleContainer'}>
             <h1 className={'title'}>Категорії online курсів</h1>
             <span className={'description'}></span>
          </div>
         <ul className="list">
            {coursesList.map(item=>{
               return (<CourseTile key={item.id} data={item}/>)
            })}
         </ul>
       </section>
  )
}