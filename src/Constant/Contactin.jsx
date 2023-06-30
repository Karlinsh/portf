import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import css from './Contactin.module.scss'

export const Contactin = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_urs0w0d",
        "template_i4ho4o5",
        form.current,
        "MC26GCnqJQAvWyweo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={css.wrapper}>
        <h2>name</h2>
        <p>name</p>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='Name' />
        <input type="email" name="user_email" placeholder='Emall' />
        <input className={css.messege} name="message" placeholder='Messege'  />
        <input className={css.send} type="submit" value='Send'   />
      </form>
    </div>
  );
};
