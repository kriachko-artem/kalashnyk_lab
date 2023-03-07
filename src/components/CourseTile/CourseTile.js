import './styles/courseTile.css'
import {Link} from "react-router-dom";

export function CourseTile ({data}) {

  return (
     <Link to={`category/${data.path}`} className="courseTile">
       <div className="background">
         <img src="https://static.tildacdn.com/tild3736-3336-4165-b232-313963376365/2016-05-12-07-34-mak.jpg" alt={data.title}/>
       </div>
        <span className={'courseTile_title'}>
          {data.title}
        </span>
     </Link>
  )
}