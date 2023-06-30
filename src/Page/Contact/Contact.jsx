import React from 'react'
import css from './Contact.module.scss'
import Map from '../../Constant/Map'
import { Contactin } from '../../Constant/Contactin'


function Contact() {
  return (
    <div className={css.wrapper}>
        <div className={css.left}>
          <Contactin/>
        </div>
        <div className={css.right}>
          <Map/>
        </div>
    </div>
  )
}

export default Contact