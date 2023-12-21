import s from './../Dialogs.module.css';

export const MsgItem = (props) => {
   // console.log('props msgitem: ', props)

   return (
      <div className={s.msg}>
         <div>
            <span className={s.msg_text}>
               {props.text}
            </span>
         </div>
      </div>
   )
}