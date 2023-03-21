import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {NotFound} from "../NotFound/NotFound";
import {Poster} from "../../components/Poster/Poster";
import {CategoriesList} from "../../components/CategoriesList/CategoriesList";
import {ConsultationForm} from "../../components/ConsultationForm/ConsultationForm";


export function Course () {
   const params = useParams();
   const data = useSelector(state => state.coursesListReducer.courses)
      .find(category=>category.path===params.category).courses
      .find(course=>course.path === params.course)

  return (
     !data ? <NotFound /> :
        <>
           <Poster title={data.title} description={data.description}/>
           <CategoriesList to={'/courses/'}/>
           <section className={'consultation content'}>
              <ConsultationForm/>
           </section>
        </>
  )
}