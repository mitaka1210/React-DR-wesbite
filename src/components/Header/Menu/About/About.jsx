import React, { Fragment } from 'react';
import Footer from '../../../Footer/Footer';
import style from './about.module.scss';
import images from './small.jpg';
export default function contact() {
  return (
    <Fragment>
      <h1 className={style.header__item}>For practice on D-r V.Vulcheva:</h1>
      <div className={style.container__Box}>
        <div className={style.container__img}>
          <img src={images} alt="" />
        </div>
        <div className={style.contentTxt}>
          <p>
            For Dr. Vulcheva, Studio Dental is her dream job because of the balance of building a
            business, working with an amazing team of colleagues, and providing great service to
            patients. "The best days are when I know I’ve helped someone solve a real challenge,"
            she says. "Whether it’s fixing a broken tooth or showing them that dentistry doesn’t
            have to be scary, I love connecting with people. Having served patients in Shumen for
            over 10 years, I cherish the relationships I have been able to build and love being a
            small part of the community." Dr. Vulcheva specializes in dental implant care and
            coordination, cosmetic dentistry and family dentistry. When she’s not seeing patients,
            she loves spending time with her children and friends. You may see her sipping a
            margarita at Shumen, and if so, please say hello!
          </p>

          <div className={style.container__Small}>
            <h2>Education :</h2>
            <ol>
              <li>University of the ,....</li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
