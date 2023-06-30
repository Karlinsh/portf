import React from 'react'
import reacts from '../../Assets/reakts.png'
import javas from '../../Assets/javas.png'
import types from '../../Assets/types.png'
import css from './Development.module.scss'
import htmls from '../../Assets/htmls.png'
import scss from '../../Assets/scss.png'





function Development() {
  return (
    <div className={css.wrapper}>
      <div className={css.images}>
        <a href="https://ru.legacy.reactjs.org/">
        <img src={reacts} alt="" />
        </a>
      </div >
      <div className={css.images}>
        <img src={javas} alt="" />
      </div >
      <div className={css.images}> 
      <img src={types} alt="" />
      </div>
      <div className={css.images}> 
      <img src={htmls} alt="" />
      </div>
      <div className={css.images}> 
      <img src={scss} alt="" />
      </div>
    </div>
  )
}

export default Development