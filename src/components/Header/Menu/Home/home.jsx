import React from 'react';
import Slider from '../../../Main/Slider/slider';
import Content from '../../../Main/RightText-LeftImg/Content';
import Services from '../../../Main/Services/Services';
import Avatar from '../../../Main/Slider/Avatar/avatar';
import BgrText from '../../../Main/BGR_IMG+TEXT/BgrText';
import Price from '../../../Main/Price/Price';
//import Pricing from '../../../Main/Price/Pricing';

function Home() {
    return (
        <div>
        
            <Slider />
            <Content />
            <Services />
            <BgrText />
            <Avatar />
            <Price />
            {/*<Pricing />*/}

        </div>
    )
}

export default Home
