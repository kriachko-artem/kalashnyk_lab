import './styles/categoryTile.css'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";


export function CategoryTile ({data, to}) {
  return (
     <motion.li className="categoryTile">
        {/*<Link to={`${to || ''}${data.path}`}className={'categoryLabel'}>*/}
        {/*   LINK*/}
        {/*</Link>*/}
        <Link to={`${to || ''}${data.path}`} className={'categoryLabel'}>
          <div className="background">
            <img src="https://static.tildacdn.com/tild3736-3336-4165-b232-313963376365/2016-05-12-07-34-mak.jpg" alt={data.title}/>
          </div>
           <span className={'categoryTile_title'}>
             {data.title}
           </span>
        </Link>
     </motion.li>
  )
}