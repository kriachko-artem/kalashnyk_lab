import './styles/consultationModal.css'
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../store/slices/consultationModal";
import {useEffect, useState} from "react";
import {Selector} from "../Selector/Selector";
import {IoCheckmarkSharp, IoClose} from "react-icons/io5";
import {AnimatePresence, motion} from "framer-motion";


export function ConsultationModal() {

   useEffect(() => {
      document.querySelector('body').style.overflow = 'hidden'
      return () => {
         document.querySelector('body').style.overflowY = 'visible'
      }
   })

   const coursesList = useSelector(state => state.coursesListReducer.courses);
   const dispatch = useDispatch();
   const hide = () => {
      dispatch(hideModal())
   }

   const selectorOptions = coursesList.reduce((acc, item, index) => {
      const result = item.courses.map(course => (
         {
            label: course.title,
            value: course.value
         }
      ));
      return [...acc, ...result]
   }, []);

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [course, setCourse] = useState('')

   const [nameValid, setNameValid] = useState(true);
   const [phoneValid, setPhoneValid] = useState(true)
   const [mailValid, setMailValid] = useState(true);
   const [permission, setPermission] = useState(false);

   const allValid = (nameValid && phoneValid && mailValid && course && permission) === true


   const inputName = (e) => {
      setName(e.target.value.trim())
   };

   function inputPhone(e) {
      const phone = e.target.value.replace(/\D/g, '')
      const match = phone.match(/(\d{0,2})(\d{0})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      e.target.value = '+38' + (match[4] ? ' (' + match[3] + ') ' : '' + match[3]) + match[4] + (match[5] ? '-' + match[5] : '') + (match[6] ? '-' + match[6] : '')
      setPhone(`+${e.target.value.replace(/\D/g, '')}`)
   }

   const inputMail = (e) => {
      setEmail(e.target.value)
   };

   const checkValidPhone = () => {
      const match = phone.replace(/\D/g, '')
         .match(/(\d{0,2})(\d{0})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      const operatorValid = /^(039|050|063|066|067|068|073|091|092|093|094|095|096|097|098|099)/.test(match[3]);
      setPhoneValid(operatorValid && phone.length === 13)
   }
   const checkValidMail = () => {
      const validMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
      setMailValid(validMail)
   };
   const checkValidName = () => {
      const words = name.split(' ')
      const validLength = words.every(item => item.length >= 2)
      setNameValid(validLength && words.length >= 2)
   }
   const checkedCourse = (checked) => {
      setCourse(checked)
   }
   const form = {
      name, email, phone,
      course: course.label
   }
   const sendForm = () => {
      console.log("form", form)
      hide()
   }


   return (
      <motion.div className={'modalWrapper'}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}>
         <div className="modal">
            <div className="modalHeader">
               <h1>Запит на консультацію</h1>
               <h5>Залиште ваші контактні дані, і ми вам обов'язково зателефонуємо!</h5>
            </div>
            <form>
               <div className="row">
                  <div className="inputName input">
                     <label htmlFor={'name'}>Імʼя, Прізвище</label>
                     <input onChange={inputName}
                            onBlur={checkValidName}
                            id={'name'} type="text"
                            placeholder={'Артем Крячко'}/>
                  </div>
                  <AnimatePresence>
                     {!nameValid && <motion.div
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                        transition={{duration: 0.2, ease: 'easeOut'}}
                        className={'notValid'}>
                        <span className={'notValid'}>Перевірте правильність імені та прізвища</span>
                     </motion.div>}
                  </AnimatePresence>
               </div>
               <div className="row">
                  <div className="inputName input">
                     <label htmlFor={'lastName'}>Email</label>
                     <input onChange={inputMail}
                            onBlur={checkValidMail}
                            id={'lastName'} type="text"
                            placeholder={'artem@gmail.com'}/>
                  </div>
                  <AnimatePresence>
                     {!mailValid && <motion.div
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                        transition={{duration: 0.2, ease: 'easeOut'}}
                        className={'notValid'}>
                        <span>Перевірте правильність поштового адресу</span>
                     </motion.div>}
                  </AnimatePresence>
               </div>
               <div className="row">
                  <div className="inputName input">
                     <label htmlFor={'phone'}>Телефон</label>
                     <input onChange={inputPhone}
                            onBlur={checkValidPhone}
                            id={'phone'} type="tel"
                            placeholder={'+38 (050) 087-64-55'}/>
                  </div>
                  <AnimatePresence>
                     {!phoneValid && <motion.div
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                        transition={{duration: 0.2, ease: 'easeOut'}}
                        className={'notValid'}>
                        <span>Перевірте правильність номеру телефону</span>
                     </motion.div>}
                  </AnimatePresence>
               </div>
               <div className="row">
                  <div className="inputCourses input">
                     <label>Курс</label>
                     <div className="selectorContainer">
                        <Selector options={selectorOptions} checkedValue={checkedCourse}/>
                     </div>
                  </div>
               </div>
            </form>
            <div className="modalFooter">
               <div className="permission">
                  <span onClick={() => setPermission(!permission)}
                        className={`checkbox iconHolder ${permission ? 'checked' : ''}`}>
                     {permission ? <IoCheckmarkSharp color={'#0795e2'}/> : null}
                  </span>
                  <label>Згоден на обробку персональних даних</label>
               </div>
               <button className={'send'}
                       onClick={sendForm}
                       disabled={!allValid}>Залишити запит
               </button>
            </div>
            <button onClick={hide} className={'closeButton'}>
               <IoClose color={'grey'} size={'100px'}/>
            </button>
         </div>

      </motion.div>
   )
}