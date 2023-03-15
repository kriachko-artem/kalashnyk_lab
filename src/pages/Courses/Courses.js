import './styles/courses.css'
import {Poster} from "../../components/Poster/Poster";
import {CategoriesList} from "../../components/CategoriesList/CategoriesList";

export function Courses () {

  return (
     <div className={'courses'}>
       <Poster title={'Курси'}
               description={'Онлайн тренінги по самих сучасних ін’єкційних техніках'}
       />
        <CategoriesList />
     </div>
  )
}