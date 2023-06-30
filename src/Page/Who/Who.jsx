import React from "react";
import css from "./Who.module.scss";
import line from "../../Assets/line.png";
import Test from "../../Component/Test/Test";

function Who() {
  return (
    <div className={css.wrapper}>
      <div className={css.heros}>
        <div className={css.left}>
          <Test/>
        </div>
        <div className={css.right}>
          <div className={css.image3d}>{/* <img src={moon} alt="" /> */}</div>
          <div className={css.right}>
            <h2>Think. make Solver</h2>
            <div className={css.right_text}>
              <img src={line} alt="" />
              <h3>What we do</h3>
            </div>
            <div className={css.right_end}>
              <h2>
                a creative group of designers and developers with a passion for
                the arts.
              </h2>
              <button>See our works</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;
