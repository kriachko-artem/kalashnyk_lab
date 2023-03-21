import './styles/coursesListModal.css'
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


export function CoursesListModal () {

   const firstColumn = useSelector(state => state.coursesListReducer.courses);

   const [checkedInFirstColumn,setCheckedInFirstColumn] = useState(0);
   const secondColumn = firstColumn[checkedInFirstColumn].courses;
   const subCategoriesAndCourses = useRef(null);

   const checkFirst = (index) => {
      setCheckedInFirstColumn(index)
   }

   return (
      <>
            <div className="headerModal">
               <div className={'mainCategories'}>
                  <ul className={'submenuColumn first'}>
                     {firstColumn.map((item,index)=>(
                        <li onClick={()=>checkFirst(index)} className={`subItem`} key={item.id}>{item.title} {item.id}</li>
                     ))}
                  </ul>
               </div>
               <div className="divider"/>
               <div className={'subCategoriesAndCourses'} ref={subCategoriesAndCourses}>
                  <ul className={'submenuColumn second'}>
                     {secondColumn.map((item)=>(
                        <Link to={`/courses/${firstColumn[checkedInFirstColumn].path}/${item.path}`} className={'subItem'} key={item.id}>{item.title}{item.id}</Link>
                     ))}
                  </ul>
               </div>
            </div>
      </>
  )
}