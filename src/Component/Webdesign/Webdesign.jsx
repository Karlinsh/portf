import React  from 'react'
import image1 from '../../Assets/scss.png'
import css from './Webdesign.module.scss'
import image2 from '../../Assets/htmls.png'





function Webdesign() {
  return (
    <div className={css.wrapper}>
      <div className={css.images}>
      <img src={image1} alt="" />
      </div>
      <div className={css.images}>
        <img src={image2} alt="" />
      </div>
     
    </div>
  )
}

export default Webdesign