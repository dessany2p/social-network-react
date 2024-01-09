import React from "react";
import s from './Users.module.css';

let Numerations = (props) => {
   // console.log(props)
   debugger;

   let totalCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= totalCount; i++) {
      pages.push(i)
   }

   return <div
      className={s.box_span}>
      {pages.map((p) => {
         // debugger
         return <span
            className={props.currentPage === p ? s.active : undefined}
            onClick={() => { props.onPageChanged(p) }}> {p}
         </span>
      })}
   </div>
}

export default Numerations;