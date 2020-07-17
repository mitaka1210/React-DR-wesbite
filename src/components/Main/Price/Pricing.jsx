import React, { Fragment } from 'react'
import Price from '../Price/Price';
import style from '../Price/price.module.scss';
function Pricing(props) {
	return (
		<div>
			<Price price = {<Fragment>
				<div className= {style.price__Card}>
									<h4>Basic</h4>
									<span className= {style.price__Price}> <text> $24.59
										</text><p> /session</p>
									</span>
									<div className={style.Order}>
									<ul className= {style.price__Order}>
										<li className= {style.price__item}>
											<p> Diagnostic Services</p></li>
										<li className= {style.price__item}><p>Professional Consultation</p></li>
										<li className= {style.price__item}><p>Tooth Implants</p></li>
										<li className= {style.price__item}><p>Surgical Extractions</p></li>
										<li className= {style.price__item}><p>Teeth Whitening</p></li>
									</ul>
									</div>
									<div className={style.offer}>
										<button className={style.button}><p>Get Offer</p></button>
									</div>
								</div>
			</Fragment>} />
		</div>
	)
}

export default Pricing
