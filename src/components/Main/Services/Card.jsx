import React from 'react';
import style from './services.module.scss'

function Card(props) {
	return (
		
			 <div className={style.box}>
                    <div className={style.icon}>02</div>
                    <div className={style.contentText}>
								<h5>{props.work}</h5>
									
                        <a href="#">Read More</a>
                    </div>
         </div>
		
	)
}

export default Card
