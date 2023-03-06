import './styles/coursesListModal.css'
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useOutsideClick} from "../../hooks/useOutsideClick";


export function CoursesListModal ({close}) {

   const firstColumn = useSelector(state => state.coursesListReducer.courses);


   const [height,setHeight] = useState(0);
   const [checkedInFirstColumn,setCheckedInFirstColumn] = useState(0);
   const [checkedInSecondColumn,setCheckedInSecondColumn] = useState(0);
   const secondColumn = firstColumn[checkedInFirstColumn].courses;
   const subCategoriesAndCourses = useRef(null);


   const updateHeight = () => {
      let maxHeight = 0
      Array.from(subCategoriesAndCourses.current.children).forEach(item=>{
         maxHeight = item.clientHeight > maxHeight ? item.clientHeight : maxHeight
         if (item.clientHeight > maxHeight){
            maxHeight = item.clientHeight
         }
      })
      setHeight(maxHeight)
   }
   useEffect(()=>{
   },[])
   useEffect(()=>{
      updateHeight()
   },[checkedInFirstColumn, checkedInSecondColumn])

   const show = (elem)=>{
      elem.classList.add('updated')
      const animation = [
         {opacity: 0},{opacity: 1}
      ];
      const options = {
         duration: 500,
         easing: 'ease-out',
         delay: 500
      };
      elem.animate(animation,options)
         .finished
         .then(()=>{
            elem.classList.remove('updated')
         })
   };

   const checkFirst = (index) => {
      setCheckedInFirstColumn(index)
      setCheckedInSecondColumn(0)
      show(subCategoriesAndCourses.current)
   }
   const ref = useOutsideClick(()=>{
      setHeight(0)
      close()
   });


   return (
     <div ref={ref} className="headerModal" style={{height}}>
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
              {secondColumn.map((item,index)=>(
                 <li className={'subItem'} key={item.id}>{item.title}{item.id}</li>
              ))}
           </ul>
        </div>
     </div>
  )
}