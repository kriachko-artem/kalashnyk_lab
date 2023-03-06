import './styles/consultationModal.css'
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../store/slices/consultationModal";
import { useState} from "react";
import {Selector} from "../Selector/Selector";
import { IoClose, IoCheckmarkSharp } from "react-icons/io5";
export function ConsultationModal () {
   
   const coursesList = useSelector(state => state.coursesListReducer.courses);
   const dispatch = useDispatch();
   const hide = (event)=> {
      event.preventDefault()
      dispatch(hideModal())
   }
   
   const selectorOptions = coursesList.reduce((acc,item,index)=>{
      const result = item.courses.map(course=>(
         {
            label: course.title,
            value: course.value
         }
      ));
      return [...acc, ...result]
   },[]);

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [permission, setPermission] = useState(false);

   const inputName = (e)=>{
      setName(e.target.value)
   };
   const inputMail = (e)=>{
      setEmail(e.target.value)
   };
   const inputPhone = (e)=>{
      setPhone(e.target.value)
   };
   
  return (
       <div className={'modalWrapper'}>
         <div className="modal">
           <div className="modalHeader">
              <h1>Запит на консультацію</h1>
              <h5>Залиште ваші контактні дані, і ми вам обов'язково зателефонуємо!</h5>
           </div>
            <form>
               <div className="inputName input">
                  <label htmlFor={'name'}>Імʼя</label>
                  <input onChange={inputName} id={'name'} type="text" placeholder={'Артем Крячко'}/>
               </div>
               <div className="inputName input">
                  <label htmlFor={'lastName'}>Email</label>
                  <input onChange={(e=>setEmail(e.target.value))} id={'lastName'} type="text" placeholder={'artem@gmail.com'}/>
               </div>
               <div className="inputName input">
                  <label htmlFor={'phone'}>Телефон</label>
                  <input onChange={(e=>setName(e.target.value))} id={'phone'} type="tel" pattern="[0-9]{1,12}" placeholder={'+380500876455'}/>
               </div>
               <div className="inputCourses input">
                  <label>Курс</label>
                  <div className="selectorContainer">
                     <Selector options={selectorOptions}/>
                  </div>
               </div>
            </form>
            <div className="modalFooter">
               <div className="permission">
                  <span onClick={()=>setPermission(!permission)}
                        className={`checkbox ${permission ? 'checked' : ''}`}>
                     {permission ? <IoCheckmarkSharp color={'#0795e2'}/> : null}
                  </span>
                  <label>Згоден на обробку персональних даних</label>
               </div>
               <button className={'send'}>Залишити запит</button>
            </div>
            <button onClick={hide} className={'closeButton'}>
               <IoClose color={'grey'} size={'2em'}/>
            </button>
         </div>
       </div>
  )
}