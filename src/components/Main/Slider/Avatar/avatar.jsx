import React from 'react'
import style from './avatar.module.scss';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-4.jpg';
import img5 from '../../images/img-5.jpg';




function Avatar() {
    return (
        <div className={style.For__Me}>
            <div className={style.about__Me}>

            <h3 className={style.say}>My Patients Says About Me</h3>
            </div>
            <div className={style.captioned_gallery}>
                    
                <figure className={style.sliderSecond}>
                    <figure>
                        <img  className={style.imgSlider} src={img1} alt='' />
                        <figcaption><q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dignissimos ullam corporis ipsam doloremque, officiis iusto tenetur praesentium qui molestiae nihil fugit incidunt eius recusandae autem nobis numquam porro blanditiis.</q></figcaption>
                    </figure>

                    <figure>
                        <img  className={style.imgSlider} src={img2} alt="" />
                        <figcaption><q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dignissimos ullam corporis ipsam doloremque, officiis iusto tenetur praesentium qui molestiae nihil fugit incidunt eius recusandae autem nobis numquam porro blanditiis.</q></figcaption>
                    </figure>

                    <figure>
                        <img  className={style.imgSlider} src={img3} alt="" />
                        <figcaption><q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dignissimos ullam corporis ipsam doloremque, officiis iusto tenetur praesentium qui molestiae nihil fugit incidunt eius recusandae autem nobis numquam porro blanditiis.</q></figcaption>
                    </figure>

                    <figure>
                        <img className={style.imgSlider} src={img5} alt="" />
                        <figcaption><q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dignissimos ullam corporis ipsam doloremque, officiis iusto tenetur praesentium qui molestiae nihil fugit incidunt eius recusandae autem nobis numquam porro blanditiis.</q></figcaption>
                    </figure>

                    <figure>
                        <img  className={style.imgSlider} src={img1} alt="" />
                        <figcaption><q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dignissimos ullam corporis ipsam doloremque, officiis iusto tenetur praesentium qui molestiae nihil fugit incidunt eius recusandae autem nobis numquam porro blanditiis.</q></figcaption>
                    </figure>
                </figure>
            </div>
        </div>

    )
}
export default Avatar
