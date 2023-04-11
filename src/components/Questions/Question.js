import {useState} from "react";


export function QuestionItem ({data, index}) {

   const openAnswer = ()=>{
      setIsOpen(!isOpen)
   };
   const [isOpen,setIsOpen] = useState(false);
   const questionNumber = index < 10 ? `0${index+1}` : index+1;

  return (
     <li className={`questionItem ${isOpen? 'opened': 'closed'}`}>
        <span className={'questionNumber'}>{questionNumber}</span>
        <div className={'questionAnswer-block'}>
           <button onClick={openAnswer} className={'question'}>{data.question}
              <span className={'cross'}/>
           </button>
           <span className={'answer'}>{data.answer}</span>
        </div>
     </li>
  )
}