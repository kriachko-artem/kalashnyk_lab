import {useState} from "react";


export function QuestionItem ({data}) {

   const openAnswer = ()=>{
      setIsOpen(!isOpen)
   };
   const [isOpen,setIsOpen] = useState(false);

  return (
     <li className={`questionItem ${isOpen? 'opened': 'closed'}`}>
        <button onClick={openAnswer} className={'question'}>{data.question}
           <span className={'cross'}/>
        </button>
        <span className={'answer'}>{data.answer}</span>
     </li>
  )
}