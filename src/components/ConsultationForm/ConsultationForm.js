import './styles/consultationForm.css'
import pendingImg from '../../global/assets/img/loader.svg'
import successImg from '../../global/assets/img/success.svg'
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../store/slices/consultationModal";
import {useRef, useState} from "react";
import {Selector} from "../Selector/Selector";
import {IoCheckmarkSharp, IoClose} from "react-icons/io5";
import {AnimatePresence, motion} from "framer-motion";
import {sendToSheets, sendToTelegram} from "../../api/sendingForm";
import {useOutsideClick} from "../../hooks/useOutsideClick";


export function ConsultationForm({closable = false}) {

   const ref = useOutsideClick(()=>hide());

   const form = useRef(null);

   const coursesList = useSelector(state => state.coursesListReducer.courses);
   const dispatch = useDispatch();
   const hide = () => {
      if (!closable) return
      setEnable(false)
      dispatch(hideModal())
   }

   const selectorOptions = coursesList.reduce((acc, item) => {
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
   const [course, setCourse] = useState('');

   const [nameValid, setNameValid] = useState(true);
   const [phoneValid, setPhoneValid] = useState(true)
   const [mailValid, setMailValid] = useState(true);
   const [permission, setPermission] = useState(false);
   const [status, setStatus] = useState('');
   const [enable, setEnable] = useState(true);

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
      const validLength = words.every(item => item.length >= 2 && /\D/.test(item))
      setNameValid(validLength && words.length >= 2)
   }
   const checkedCourse = (checked) => {
      setCourse(checked)
   }

   const sendForm = () => {
      setStatus('pending')
      const formData = {
         name, email, phone,
         course: course.label
      }
      //To Google Sheets

      sendToSheets(formData).then(() => {
         setStatus('sent')
      })

      //To Telegram Bot
      sendToTelegram(formData).then(() => console.log('good')
      )
   }

   return (
      <AnimatePresence>
         { enable &&
         <motion.div className="consultationForm" ref={ref} style={{minHeight: status === 'sent' ? '100px' : '500px'}}
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     exit={{opacity: 0}}
         >
            {!status && <motion.div
               key={"form"}
               exit={{opacity: 0}}
               transition={{duration: 0.3, ease: "easeIn"}}>
               {closable &&
                  <button onClick={hide} className={'closeButton'}>
                     <IoClose color={'grey'} size={'100px'}/>
                  </button>
               }
               <div className="modalHeader">
                  <h1>Запит на консультацію</h1>
                  <h5>Залиште ваші контактні дані, і ми вам обов'язково зателефонуємо!</h5>
               </div>
               <form ref={form}>
                  <div className="row">
                     <div className="inputName input">
                        <label htmlFor={'name'}>Імʼя, Прізвище</label>
                        <input onChange={inputName}
                               onBlur={checkValidName}
                               id={'name'} type="text"
                               placeholder={'Артем Крячко'}/>
                     </div>
                     {!nameValid && <motion.div
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                        transition={{duration: 0.2, ease: 'easeOut'}}
                        className={'notValid'}>
                        <span className={'notValid'}>Перевірте правильність імені та прізвища</span>
                     </motion.div>}
                  </div>
                  <div className="row">
                     <div className="inputName input">
                        <label htmlFor={'lastName'}>Email</label>
                        <input onChange={inputMail}
                               onBlur={checkValidMail}
                               id={'lastName'} type="text"
                               placeholder={'artem@gmail.com'}/>
                     </div>
                     {!mailValid && <motion.div
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                        transition={{duration: 0.2, ease: 'easeOut'}}
                        className={'notValid'}>
                        <span>Перевірте правильність поштового адресу</span>
                     </motion.div>}
                  </div>
                  <div className="row">
                     <div className="inputName input">
                        <label htmlFor={'phone'}>Телефон</label>
                        <input onChange={inputPhone}
                               onBlur={checkValidPhone}
                               id={'phone'} type="tel"
                               placeholder={'+38 (050) 087-64-55'}/>
                     </div>
                     {!phoneValid && <motion.div
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                        transition={{duration: 0.2, ease: 'easeOut'}}
                        className={'notValid'}>
                        <span>Перевірте правильність номеру телефону</span>
                     </motion.div>}
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
                  <div className="permission"
                       onClick={() => {
                          setPermission(!permission)
                       }}
                  >
                     <span className={`checkbox iconHolder ${permission ? 'checked' : ''}`}>
                        {permission ? <IoCheckmarkSharp color={'#0795e2'}/> : null}
                     </span>
                     <label>Згоден на обробку персональних даних</label>
                  </div>
                  <motion.button whileTap={{scale: 0.97}} className={'send'}
                                 style={{pointerEvents: !allValid && 'none'}}
                          onClick={sendForm}
                          disabled={!allValid}>Залишити запит
                  </motion.button>
               </div>
            </motion.div>}
            {status === 'pending' &&
               <div
                  className={'pending sentForm'}
                  key={'pending'}>
                  <div className="img-holder">
                     <img src={pendingImg} alt="Pending"/>
                  </div>
               </div>
            }
            {status === 'sent' &&
               <div className={'sent sentForm'}
                    key={'sent'}>
                  {closable &&
                     <button onClick={hide} className={'closeButton'}>
                        <IoClose color={'grey'} size={'100px'}/>
                     </button>
                  }
                  <div className="img-holder">
                     <img src={successImg} alt="Success"/>
                  </div>
                  <div className="sentMessage">
                     <h2>Ваша заявка відправлена!</h2>
                     <p>Очікуйте на повідомлення від менеджера.</p>
                  </div>
               </div>
            }
         </motion.div>
         }
      </AnimatePresence>
   )
}