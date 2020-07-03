import React from 'react'
import style from './logo.module.scss';
function logo() {
    return (
        <div className = {style.logo}>
            <span>
                <p>Free Call: +359 888888888</p>
                <p>Street: </p>
            </span>
            <span>
                <h1>Dr.Vulcheva</h1>
                <p className = {style.profession}>dentist</p>
            </span>
                
            <span>
                <p>Open Hours</p>
                <p>Mon-Sat: <b>8:00am - 9:00pm</b> Sun: <b className ={style.closed}>CLOSED</b></p>
            </span>
            
        </div>
    )
}

export default logo
