import React, { Fragment } from 'react';
import style from './slider.module.scss';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';
import Message from './Messages/Message';
import { render } from '@testing-library/react';
function Slider() {
  return (
    <div id={style.slider}>
      <div className={style.slides}>
        <div className={style.slider}>
          <div className={style.legend}></div>
          <div className={style.content}>
            <div className={style.contentTxt}>
              <Message
                text={
                  <Fragment>
                    <h2>Smile with confidence!</h2>
                  </Fragment>
                }
              />
            </div>
          </div>
          <div className={style.image}>
            <img src={img5} alt="" />
          </div>
        </div>
        <div className={style.slider}>
          <div className={style.legend}></div>
          <div className={style.content}>
            <div className={style.contentTxt}>
              <Message
                textTwo={
                  <Fragment>
                    <h2>Smile Makes TWO</h2>
                  </Fragment>
                }
              />
            </div>
          </div>
          <div className={style.image}>
            <img src={img1} alt="" />
          </div>
        </div>

        <div className={style.slider}>
          <div className={style.legend}></div>
          <div className={style.content}>
            <div className={style.contentTxt}>
              <Message
                textThird={
                  <Fragment>
                    <h2>Smile Makes THIRD </h2>
                  </Fragment>
                }
              />
            </div>
          </div>
          <div className={style.image}>
            <img src={img2} alt="" />
          </div>
        </div>

        <div className={style.slider}>
          <div className={style.legend}></div>
          <div className={style.content}>
            <div className={style.contentTxt}>
              <Message
                textFour={
                  <Fragment>
                    <h2>Better life through better dentistry!</h2>
                  </Fragment>
                }
              />
            </div>
          </div>
          <div className={style.image}>
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      <div className={style.switch}>
        <ul>
          <li>
            <div className={style.on}></div>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
export default Slider;
