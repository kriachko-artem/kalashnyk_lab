import './styles/loader.css'
import loader from './img/loader.svg'
import {useSelector} from "react-redux";


export function Loader ({children}) {
   const courses = useSelector(state => state.coursesListReducer.courses)

   return (
      courses ? children :
       <div className={'loader'}>
          <div className="img-holder">
             <img src={loader} alt="Loader"/>
          </div>
       </div>
  )
}