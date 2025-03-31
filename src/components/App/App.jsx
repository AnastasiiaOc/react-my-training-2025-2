import {NavLink} from 'react-router-dom'
// import {Route, Routes} from "react-dom"

import { Routes, Route } from 'react-router-dom'
import clsx from "clsx"
import css from "../App/App.module.css"
import HomePage from '../../pages/HomePage/HomePage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

// MODULE 5
export default function App (){

  const getStylesFunction = ({isActive}) =>{
   return  clsx(css.link, isActive && css.active );
  }

  return (
    <header>
      <div>
        <div>
        <Routes>
          <Route path ="/dashboard" element ={ <h2> Renders the content of the page gashboard</h2>}/>
          <Route path ="/dashboad/:userId" element ={<p>Some HomePage</p>}/>
          <Route path ="/" element ={<HomePage/>}/>
          <Route path ="*" element ={<NotFoundPage/>}/>
        </Routes>
        </div>
      

        <ul>
           <li className={css.link}> 
             <NavLink to ="/" className ={getStylesFunction}>-Home: this link doesnt reload the page but only changes the url </NavLink> 
          </li>
          <li className={css.link}>
            <NavLink to ="/dashboard" className ={getStylesFunction}>-Dashboard: Navlink permits to add styles (not like Link) Here classname gets a function for active or not active link styles in clsx library. </NavLink>
          </li> 
        </ul>
      </div>
    </header>
  )
}


