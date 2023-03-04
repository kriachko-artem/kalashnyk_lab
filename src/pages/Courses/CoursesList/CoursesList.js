import './styles/coursesList.css'
import {Course} from "./Course/Course";

export function CoursesList () {

   const coursesList = [
      {id: 1, title: 'Course 1'},
      {id: 2, title: 'Course 2'},
      {id: 3, title: 'Course 3'},
      {id: 4, title: 'Course 4'},
      {id: 5, title: 'Course 5'},
   ]

  return (
       <section className={'coursesList content'}>
          <div className={'titleContainer'}>
             <h1 className={'title'}>Категорії online курсів</h1>
             <span className={'description'}></span>
          </div>
         <ul className="list">
            {coursesList.map(item=>{
               return (<Course key={item.id} data={item}/>)
            })}
         </ul>
       </section>
  )
}