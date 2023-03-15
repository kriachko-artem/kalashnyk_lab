import './styles/categoryTile.css'
import {Link} from "react-router-dom";

export function CategoryTile ({data, to}) {
  return (
     <Link to={`${to || ''}${data.path}`} data={data} className="categoryTile">
       <div className="background">
         <img src="https://static.tildacdn.com/tild3736-3336-4165-b232-313963376365/2016-05-12-07-34-mak.jpg" alt={data.title}/>
       </div>
        <span className={'categoryTile_title'}>
          {data.title}
        </span>
     </Link>
  )
}