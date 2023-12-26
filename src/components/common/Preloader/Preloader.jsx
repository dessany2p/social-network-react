import loader from '../../../assets/loader.gif'
import React from 'react'

export const Preloader = (props) => {
   return <div
      style={{ display: 'flex', margin: '10px auto', justifyContent: 'center' }}
   >
      <img src={loader} alt={'preloader'} />
   </div>
}