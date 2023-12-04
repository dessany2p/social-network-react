import React from 'react';
import h from './Header.module.css'
import logo from './icons/moon_icon.png'


export const Header = () => {
   return (
      <header className={h.header}>
         <div className={h.logo__container}>
            <img className={`${h.header_img}`} src='https://a.d-cd.net/90AAAgPbpeA-960.jpg' alt='logo'></img>
         </div>
         <img className={`${h.switch_img}`} src={logo} alt="night_mode" />
      </header>
   )
}