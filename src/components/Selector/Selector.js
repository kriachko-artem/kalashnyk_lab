import './styles/selector.css'
import { IoCaretDown } from "react-icons/io5";
import {useState} from "react";
import {Dropdown} from "./Dropdown";
import {useOutsideClick} from "../../hooks/useOutsideClick";

export function Selector ({options}) {

   const [opened, setOpened] = useState(false);

   const openClose = ()=>{
      setOpened(prevState => !prevState)
   };
   const [checked, setChecked] = useState(null);

   const onChecked = (item)=>{
      setChecked(item)
   }

   const ref = useOutsideClick(()=>setOpened(false));

   return (
       <div ref={ref} className={"selector"}>
          <div onClick={openClose} className={`label ${opened ? 'opened' : ''}`}>
             {checked ? checked.label : 'Оберіть'}
             <span className={'iconHolder'}><IoCaretDown/></span>
          </div>
          {opened ? <Dropdown onChecked={onChecked} options={options} /> : null}
       </div>
  )
}