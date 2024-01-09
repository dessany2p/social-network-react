import s from './Profile.module.css';
import { Preloader } from '../common/Preloader/Preloader'

export const ProfileInfo = (props) => {
   // console.log(props)
   // debugger
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         {/* <img className='banner' src='https://lemon.school/storage/2023/07/img_7017-780x258.png' alt=''></img> */}

         <div className={s.profile__header}>
            {/* <img className={s.avatar} src='https://kaifolog.ru/uploads/posts/2023-02/1675414381_002.jpg' alt='avatar'></img> */}
            <img className={s.avatar} src={props.profile.photos.large} alt="" />

            <div className={s.description}>
               <span> Illum ab voluptas, laudantium error, optio repellat omnis facilis ipsa molestias cum quia fugit, deleniti non ratione?</span>
               <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, quidem.</span>
               <span>Lorem, ipsum dolor.</span>
               <span>Lorem ipsum dolor sit.</span>
            </div>
         </div>
      </div>
   )
}