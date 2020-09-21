import React from 'react';
import Slider from '../../../Main/Slider/slider';
import Content from '../../../Main/RightText-LeftImg/Content';
import Services from '../../../Main/Services/Services';
import Avatar from '../../../Main/Slider/Avatar/avatar';
import BgrText from '../../../Main/BGR_IMG+TEXT/BgrText';
import Price from '../../../Main/Price/Price';
import style from './style.module.scss';
import Footer from '../../../Footer/Footer';

function Home() {
    return (
        <div className={style.page__1}>
        
            <Slider />
            <Content />
            <Services />
            <BgrText />
            <Avatar />
            <Price />
           <Footer />

        </div>
    )
}

export default Home
