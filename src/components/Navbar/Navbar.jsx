import React from 'react';
import s from './Navbar.module.css'
import { Link } from 'react-router-dom';
// import { Friend } from '../Friends/MyFriend/Friend';
// import { state } from '../../redux/state';

export const Navbar = (props) => {
   // console.log('state', props.state)
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
         <div className={s.item}>
            {/* <Link className={`${s.link}`} to='/friends'> Friends  </Link> */}
            {/* {<Friend src={props.src} name={props.name} />} */}
         </div>


      </nav>
   )
}

//TODO Добавить блок Друзья/  Интегрировать данные в STATE и прокидывать внутрь компоненты через Props.
/*   {
   В нем 3 иконки с никами 
} */