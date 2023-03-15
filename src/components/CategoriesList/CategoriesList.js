import './styles/categoriesList.css'
import {CategoryTile} from "../CategoryTile/CategoryTile";
import {useSelector} from "react-redux";

export function CategoriesList ({to}) {

   const coursesList = useSelector(state => state.coursesListReducer.courses);

  return (
       <section className={'categoriesList content'}>
          <div className={'titleContainer'}>
             <h1 className={'title'}>Категорії online курсів</h1>
             <span className={'description'}></span>
          </div>
         <ul className="list">
            {coursesList.map(item=>{
               return (<CategoryTile to={to} key={item.id} data={item}/>)
            })}
         </ul>
       </section>
  )
}