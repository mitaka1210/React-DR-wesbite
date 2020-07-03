import React from 'react';

import style from './servisec.module.scss'
import img from '../images/dental-1.svg'
function Services() {
    return (
        <div className = {style.services}>
        <h2>Services</h2>
      
            <div className= {style.servicesContainer}>
                <div className={style.box}>
                    <div className={style.icon}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={style.contentText}>
                        <h5>Services name</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.icon}>02</div>
                    <div className={style.contentText}>
                        <h5>Services name</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.icon}>03</div>
                    <div className={style.contentText}>
                        <h5>Services name</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Services
