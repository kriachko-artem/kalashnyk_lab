import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Main} from "./Main/Main";
import './styles/layout.css'


export function Layout () {

  return (
     <div className={'wrapper'}>
       <Header/>
       <Main/>
       <Footer/>
     </div>
  )
}