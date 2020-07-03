import React, {Fragment} from 'react'
import style from './avatar.module.scss';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-4.jpg';
import img5 from '../../images/img-5.jpg';
import Message from '../Messages/Message';
import {render} from '@testing-library/react';
function Avatar() {
    return (
        <div>
        <div id={style.slider}>
            <div className= {style.slides}>
                <div className={style.slider}>
                    {/*<div className={style.legend}></div>*/}
                    <div className={style.image}>
                        <img src={img1} alt=''/>
                    </div>
                    <div className={style.content}>
                        <div className={style.contentTxt}>
                            <Message text = {<Fragment>
                                <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate alias autem mollitia deserunt, fuga facere totam reprehenderit, nesciunt ad nostrum temporibus soluta quasi debitis eaque? Esse vitae ipsa perferendis?</q></p>
                            </Fragment>} />
                        </div>
                    </div>
                </div>
             </div>         
            <div className= {style.slides}>
                <div className={style.slider}>
                    {/*<div className={style.legend}></div>*/}
                    <div className={style.image}>
                        <img src={img1} alt=''/>
                    </div>
                    <div className={style.content}>
                        <div className={style.contentTxt}>
                            <Message text = {<Fragment>
                                <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate alias autem mollitia deserunt, fuga facere totam reprehenderit, nesciunt ad nostrum temporibus soluta quasi debitis eaque? Esse vitae ipsa perferendis?</q></p>
                            </Fragment>} />
                        </div>
                    </div>
                </div>
             </div>         
            <div className= {style.slides}>
                <div className={style.slider}>
                    {/*<div className={style.legend}></div>*/}
                    <div className={style.image}>
                        <img src={img1} alt=''/>
                    </div>
                    <div className={style.content}>
                        <div className={style.contentTxt}>
                            <Message text = {<Fragment>
                                <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate alias autem mollitia deserunt, fuga facere totam reprehenderit, nesciunt ad nostrum temporibus soluta quasi debitis eaque? Esse vitae ipsa perferendis?</q></p>
                            </Fragment>} />
                        </div>
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
           
       </div>
       
    )
}
export default Avatar
