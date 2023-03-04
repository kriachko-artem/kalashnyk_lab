import './styles/questions.css'
import {QuestionItem} from "./Question";

export function Questions () {

  const answersQuestions = [
    {id: 1,
    question: 'Скільки коштує консультація?',
    answer: 'Консультація коштує 500 грн',
    },
    {id: 2,
      question: 'Скільки коштує консультація?',
      answer: 'Консультація коштує 500 грн',
    },
    {id: 3,
      question: 'Скільки коштує консультація?',
      answer: 'Консультація коштує 500 грн',
    },
    {id: 4,
      question: 'Скільки коштує консультація?',
      answer: 'Консультація коштує 500 грн',
    },
    {id: 5,
      question: 'Скільки коштує консультація?',
      answer: 'Консультація коштує 500 грн',
    },
  ]

  return (
     <ul className={'question-answer'}>
       {answersQuestions.map(item=>(
          <QuestionItem data={item} key={item.id}/>
       ))}
     </ul>
  )
}