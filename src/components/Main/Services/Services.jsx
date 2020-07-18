/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';

import style from './services.module.scss';

import Card  from '../Services/Card';
function Services(work,title ) {
    return (
        <div className = {style.services}>
        <h4>Services</h4>
        <h2>My Services</h2>
        <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
      
            <div className= {style.servicesContainer}>
            <Card work = {<Fragment>
                <div className={style.card__01}>
                <div className={style.box}>
                
                <div className={style.icon}>05</div>
                <div  className={style.contentText}>
                <h6>Dental Implants</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                
                <a href="#">Read More</a>
                </div>
             </div>
             </div>
             </Fragment>} />
            <Card work = {<Fragment>
                <div className={style.card__02}>
                <div className={style.box}>
                
                <div className={style.icon}>05</div>
                <div  className={style.contentText}>
                <h6>Cosmetic Dentistry</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                
                <a href="#">Read More</a>
                </div>
             </div>
             </div>

                 
             </Fragment>} /> 
            <Card work = {<Fragment>
                <div className={style.card__03}>

                <div className={style.box}>
                
                <div className={style.icon}>05</div>
                <div  className={style.contentText}>
                <h6>Dental Care</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                
                <a href="#">Read More</a>
                </div>
             </div>
                </div>
                 
               
             </Fragment>}/>
            <Card work = {<Fragment>
                <div className={style.card__04}>

                <div className={style.box}>
                
                <div className={style.icon}>05</div>
                <div  className={style.contentText}>
                <h6>Teeth Whitening</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                
                <a href="#">Read More</a>
                </div>
             </div>
                </div>
              
             </Fragment>}/>
            <Card work = {<Fragment>
                <div className={style.card__05}>

                <div className={style.box}>
                
                <div className={style.icon}>05</div>
                <div  className={style.contentText}>
                <h6>Dental Calculus</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                
                <a href="#">Read More</a>
                </div>
             </div>
                </div>
                 
                 
             </Fragment>} />

            <Card title =  {<Fragment>
                <div className={style.card__06}>

                <div className={style.box}>
                
                    <div className={style.icon}>05</div>
                    <div  className={style.contentText}>
                        <h6>Periondontics</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                    
                    <a href="#">Read More</a>
                    </div>
                 </div>
                </div>
                 
            </Fragment>}/>
           
            <Card work = {<Fragment>
                <div className={style.card__07}>

                <div className={style.box}>
                
                <div className={style.icon}>02</div>
                <div  className={style.contentText}>
                <h6>Clip & Braces</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                
                <a href="#">Read More</a>
                </div>
             </div>
                </div>
                 
                 
             </Fragment>} />
            <Card work = {<Fragment>
                <div className={style.card__08}>

                <div className={style.box}>
                
                <div className={style.icon}>02</div>
                <div  className={style.contentText}>
                <h6>Root Cancel</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                
                <a href="#">Read More</a>
                </div>
             </div>
                </div>
                 
                 
                 
             </Fragment>} />
            <Card work = {<Fragment>
                <div className={style.card__09}>

                <div className={style.box}>
                
                <div className={style.icon}>05</div>
                <div  className={style.contentText}>
                <h6>Implants</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
                
                <a href="#">Read More</a>
                </div>
             </div>
                </div>
                 
                 
             </Fragment>} />
               
               
            </div>
        </div>
    )
}

export default Services
