import React from "react";
import css from "./Social.module.scss";
import instagram from "../../Assets/instagram.jpeg";
import telegram from "../../Assets/telegram.jpeg";
import whatsap from "../../Assets/whois.jpeg";

function SocialMedia() {
  return (
    <div className={css.wrapper}>
      <div>
        <a href="https://www.instagram.com/karlinlmg/">
          <img src={instagram} alt="" />
        </a>
      </div>
      <div>
        <a href="https://t.me/Kkkkpnx">
          <img src={telegram} alt="" />
        </a>
      </div>
      <div>
        <a href="https://wa.me/qr/XNPCVZBDJB6SI1">
        <img src={whatsap} alt="" />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
