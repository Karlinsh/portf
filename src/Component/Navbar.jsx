import React from "react";
import css from "../Page/Hero/Hero.module.scss";
import logo from "../Assets/search.png";
import image from "../Assets/moon.png";

function Navbar() {
  return (
    <div className={css.navbar_wrapper}>
      <div className={css.container}>
        <div className={css.links}>
          <img src={logo} alt="" />
          <div className={css.list}>
            <div>Home</div>
            <div>Studio</div>
            <div>Works</div>
            <div>Contact</div>
          </div>
        </div>
        <div className={css.ikons}>
          <img src={logo} alt="" />
          <div>
            <button>Hire now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
