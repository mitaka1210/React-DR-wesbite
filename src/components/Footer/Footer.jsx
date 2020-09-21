/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './footer.module.scss';

function Footer() {
  return (
    <div>
      <div className={style.container__Box}>
        <a href="" className={style.social__container}>
          <div className={style.social__cube}>
            <div className={style.front__cube}>
              <span>Twitter</span>
            </div>

            <div className={style.bottom__cube}>@dimitar</div>
          </div>
        </a>
        <a href="" className={style.social__container__facebook}>
          <div className={style.social__cube}>
            <div className={style.front__cube}>
              <span>Facebook</span>
            </div>

            <div className={style.bottom__cube}>@dimitar</div>
          </div>
        </a>
        <a href="" className={style.social__container__youtube}>
          <div className={style.social__cube}>
            <div className={style.front__cube}>instagram</div>

            <div className={style.bottom__cube}>@dimitar</div>
          </div>
        </a>
        <a href="" className={style.social__container__VK}>
          <div className={style.social__cube}>
            <div className={style.front__cube}>VK</div>

            <div className={style.bottom__cube}>@dimitar</div>
          </div>
        </a>
      </div>
      <div className={style.create}>
        <p className={style.designer}>
          <a href="https://mitaka1210.github.io/Portfolio-ENG/">
            eng.Dimitar Dimitrov © ALL rights reserved
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
