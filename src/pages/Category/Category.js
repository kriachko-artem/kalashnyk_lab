import './styles/category.css'
import {useParams} from "react-router";

export function Category () {
  const {category} = useParams();

  return (
       <h1>Category - {category}</h1>
  )
}