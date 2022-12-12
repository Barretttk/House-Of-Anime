import React from 'react'
import Carousel from './componets/carousel/Carousel';
import './style.scss';


const Home = () => {
  return (
    <div>
        <div className="title">
            <img src="https://blog.flamingtext.com/blog/2022/12/08/flamingtext_com_1670523720_348363656.png" border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com"/> 
        </div>
        <div className="carousel">
            <Carousel/>
        </div>
        <div className="body">
            
        </div>
    </div>
  );
}

export default Home
