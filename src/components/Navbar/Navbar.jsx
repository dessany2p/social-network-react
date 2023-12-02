import React from 'react';
import s from './Navbar.module.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <Link className={s.link} to='/profile'> Profile </Link>
         </div>
         <div className={s.item}>
            <Link className={s.link} to='/dialogs'> Messages </Link>
         </div>
         <div className={s.item}>
            <Link className={s.link} to='/news'> News </Link>
         </div>
         <div className={s.item}>
            <Link className={`${s.link}`} to='/music'> Music </Link>
         </div>
         <div className={s.item}>
            <Link className={`${s.link}`} to='/settings'> Settings </Link>
         </div>
      </nav>
   )
}