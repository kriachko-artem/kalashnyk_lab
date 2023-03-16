import './styles/courses.css'
import {Poster} from "../../components/Poster/Poster";
import {CategoriesList} from "../../components/CategoriesList/CategoriesList";
import {ButtonConsultation} from "../../components/ButtonConsultation/ButtonConsultation";

export function Courses () {

   const posterStyles = {
      poster:{
         alignItems: 'flex-start',
      },
      content: {
         alignSelf: 'flex-start',
         textAlign: 'left',
      }
   };

  return (
     <div className={'courses'}>
       <Poster title={'Курси'}
               description={'Онлайн тренінги по самих сучасних ін’єкційних техніках'}
               style={posterStyles}>
          <ButtonConsultation/>
       </Poster>
        <CategoriesList />
     </div>
  )
}