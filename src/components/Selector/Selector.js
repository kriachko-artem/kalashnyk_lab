import './styles/selector.css'
import { IoCaretDown } from "react-icons/io5";
import {useState} from "react";
import {Dropdown} from "./Dropdown";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import {AnimatePresence} from "framer-motion";

export function Selector ({options, checkedValue, autoClose = true}) {

   const [opened, setOpened] = useState(false);

   const openClose = ()=>{
      setOpened(prevState => !prevState)
   };
   const [checked, setChecked] = useState(null);

   const onChecked = (item)=>{
      setChecked(item)
      if (autoClose) openClose()
      checkedValue(item)
   }

   const ref = useOutsideClick(()=>setOpened(false));

   return (
       <div ref={ref} className={"selector"}>
          <div onClick={openClose} className={`label ${opened ? 'opened' : ''}`}>
             {checked ? checked.label : 'Оберіть'}
             <span className={'iconHolder'}><IoCaretDown/></span>
          </div>
          <AnimatePresence>
             {opened && <Dropdown onChecked={onChecked} options={options} />}
          </AnimatePresence>
       </div>
  )
}