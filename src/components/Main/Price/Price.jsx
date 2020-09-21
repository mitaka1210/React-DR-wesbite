import React, { useState, Fragment } from 'react';
import style from './price.module.scss';
import style2 from './style';
import Card from '../Services/Card';

function Price() {
  return (
    <div>
      <div className={style.price__Header}>
        <p>PRICING</p>
        <h3>My Pricing</h3>
        <p>
          Separated they live in. A small river named Duden flows by their place and supplies it
          with the necessary regelialia. It is a paradisematic country
        </p>
      </div>

      <div className={style.card__Box__Content}>
        <Card
          pricing={
            <Fragment>
              <div>
                <div className={style.container__Box}>
                  <div className={style.price__Card}>
                    <h4>Basic</h4>
                    <span className={style.price__Price}>
                      {' '}
                      <text> $24.69</text>
                      <p> /session</p>
                    </span>
                    <div className={style.Order}>
                      <ul className={style.price__Order}>
                        <li className={style.price__item}>
                          <p> Diagnostic Services</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Professional Consultation</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Tooth Implants</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Surgical Extractions</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Teeth Whitening</p>
                        </li>
                      </ul>
                    </div>
                    <div className={style.offer}>
                      <button className={style.button}>
                        <p>Get Offer</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />
        <Card
          pricing={
            <Fragment>
              <div>
                <div className={style.container__Box}>
                  <div className={style.price__Card}>
                    <h4>Basic</h4>
                    <span className={style.price__Price}>
                      {' '}
                      <text> $24.69</text>
                      <p> /session</p>
                    </span>
                    <div className={style.Order}>
                      <ul className={style.price__Order}>
                        <li className={style.price__item}>
                          <p> Diagnostic Services</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Professional Consultation</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Tooth Implants</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Surgical Extractions</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Teeth Whitening</p>
                        </li>
                      </ul>
                    </div>
                    <div className={style.offer}>
                      <button className={style.button}>
                        <p>Get Offer</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />
        <Card
          pricing={
            <Fragment>
              <div>
                <div className={style.container__Box}>
                  <div className={style.price__Card}>
                    <h4>Basic</h4>
                    <span className={style.price__Price}>
                      {' '}
                      <text> $24.69</text>
                      <p> /session</p>
                    </span>
                    <div className={style.Order}>
                      <ul className={style.price__Order}>
                        <li className={style.price__item}>
                          <p> Diagnostic Services</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Professional Consultation</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Tooth Implants</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Surgical Extractions</p>
                        </li>
                        <li className={style.price__item}>
                          <p>Teeth Whitening</p>
                        </li>
                      </ul>
                    </div>
                    <div className={style.offer}>
                      <button className={style.button}>
                        <p>Get Offer</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />
      </div>
    </div>
  );
}

export default Price;
