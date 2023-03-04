import './styles/courses.css'
import {Poster} from "./Poster/Poster";
import {CoursesList} from "./CoursesList/CoursesList";

export function Courses () {

  return (
     <div className={'courses'}>
       <Poster title={'Курси'}
               description={'Онлайн тренінги по самих сучасних ін’єкційних техніках'}
       />
        <CoursesList />
     </div>
  )
}