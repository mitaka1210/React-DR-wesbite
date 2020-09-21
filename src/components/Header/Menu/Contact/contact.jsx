import React, { Fragment } from 'react';
import Footer from '../../../Footer/Footer';
import style from './contact.module.scss';
import photo_1 from '../../../Main/images/girl.png';

export default function contact() {
  return (
    <Fragment>
      <div className={style.container}>
        <div className={style.form__bx}>
          <form action="">
            <h2>Contact Us</h2>

            <div className={style.input__box}>
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>

            <div className={style.input__box}>
              <input type="text" name="" required="required" />
              <span>Email address</span>
            </div>

            <div className={style.input__box}>
              <textarea required="required"></textarea>
              <span>Type your Message Here.....</span>
            </div>

            <div className={style.input__box}>
              <input type="submit" value="Send" name="" />
            </div>
          </form>
        </div>
        <div className={style.img__bx}>
          <img src={photo_1} alt="" />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
