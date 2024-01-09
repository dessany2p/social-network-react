import React from 'react';
import h from './Header.module.css'
import logo from './icons/moon_icon.png'
import { NavLink } from 'react-router-dom';


export const Header = (props) => {

   return (
      <header className={h.header}>
         <div className={h.logo__container}>
            <img className={`${h.header_img}`} src='https://a.d-cd.net/90AAAgPbpeA-960.jpg' alt='logo'></img>
         </div>
         <div className={h.login}>
            {props.isAuth ? props.login
               : <NavLink to={'/login'}>Login</NavLink>}
         </div>
         {/* <img className={`${h.switch_img}`} src={logo} alt="night_mode" /> */}
      </header>
   )
}