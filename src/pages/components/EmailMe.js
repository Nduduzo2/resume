import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailMe.css'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast("Success, message sent");
};

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_utivqst', 'template_dnxemip', form.current, {
        publicKey: 'P5lcCrVjGGkbJIh1-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="Emaildiv">
    <form className="form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" onClick = {notify} />
    </form>
    <ToastContainer/>
    </div>
  );
};