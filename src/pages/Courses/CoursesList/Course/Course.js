import './styles/course.css'

export function Course ({data}) {

  return (
     <li className="course">{data.title}</li>
  )
}