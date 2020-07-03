import React from 'react'
import style from './content.module.scss';
import img from '../images/about.jpg';
function Content() {
    return (
        <div className = {style.content}>
            <div className={style.LeftImg}>
                <img src={img} alt=""/>
            </div>
            <div className= {style.textRight}>
                <h5>WELCOME TO DENTISTA</h5>
                <span>
                Medical specialty concerned with the care of acutely ill hospitalized patients
                </span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam corporis, ut odio deserunt, est ullam necessitatibus excepturi minus nesciunt porro molestias asperiores enim iste blanditiis recusandae perspiciatis soluta beatae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam corporis, ut odio deserunt, est ullam necessitatibus excepturi minus nesciunt porro molestias asperiores enim iste blanditiis recusandae perspiciatis soluta beatae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam corporis, ut odio deserunt, est ullam necessitatibus excepturi minus nesciunt porro molestias asperiores enim iste blanditiis recusandae perspiciatis soluta beatae!

                </p>
            </div>
        </div>
    )
}

export default Content
