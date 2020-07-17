import React, { Fragment } from 'react';

import style from './services.module.scss';
import img from '../images/dental-1.svg';
import Card  from '../Services/Card';
function Services(work ) {
    return (
        <div className = {style.services}>
        <h4>Services</h4>
        <h2>My Services</h2>
        <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
      
            <div className= {style.servicesContainer}>
            <Card work = {<Fragment>
                 <h6>Dental Implants</h6>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
             </Fragment>} />
            <Card work = {<Fragment>
                 <h6>Cosmetic Dentistry</h6>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
             </Fragment>} /> 
            <Card work = {<Fragment>
                 <h6>Dental Care</h6>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
             </Fragment>}/>
            <Card work = {<Fragment>
                 <h6>Teeth Whitening</h6>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
             </Fragment>}/>
            <Card work = {<Fragment>
                 <h6>Dental Calculus</h6>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
             </Fragment>} />
            <Card work = {<Fragment>
                 <h6>Periondontics</h6>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
             </Fragment>} />
            <Card work = {<Fragment>
                 <h6>Clip & Braces</h6>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
             </Fragment>} />
            <Card work = {<Fragment>
                 <h6>Root Canel</h6>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
             </Fragment>} />
            <Card work = {<Fragment>
                 <h6>Implants</h6>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore soluta.</p>
             </Fragment>} />
               
               
            </div>
        </div>
    )
}

export default Services
