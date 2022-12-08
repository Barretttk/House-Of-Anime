import React from "react";
import "./style.scss";
import { useState, useEffect } from "react";
import all from "../../assets/images/carousel/anime.png";
import baki from "../../assets/images/carousel/baki.jpg";
import demon from "../../assets/images/carousel/demonslayer.jpg";
import aeon from "../../assets/images/carousel/aeonflux.png";
import bleach from "../../assets/images/carousel/bleach.jpg";
import codeg from "../../assets/images/carousel/codeg.png";
import death from "../../assets/images/carousel/deathnote.jpg";
import devil from "../../assets/images/carousel/devilman.png";
import naruto from "../../assets/images/carousel/naruto.jpg";
import ninja from "../../assets/images/carousel/ninjascroll.png";
import onepunch from "../../assets/images/carousel/onepunch.jpg";
import yasuke from "../../assets/images/carousel/yasuke.png";
import vamphd from "../../assets/images/carousel/vamphd.png";
import story from "../../assets/images/carousel/story.jpg";


const Carousel = () => {
      const [index, setIndex] = useState(0);

  const cards = [
    { id: "1", image: aeon },
    { id: "2", image: baki },
    { id: "3", image: demon },
    { id: "4", image: codeg },
    { id: "5", image: bleach },
    { id: "6", image: onepunch },
    { id: "7", image: ninja },
    { id: "8", image: naruto },
    { id: "9", image: death },
    { id: "10", image: all },
    { id: "11", image: yasuke },

    ];
    
    const mod = (n,m) => {
        let result = n % m;

    // Returns a positive value
    return result >= 0 ? result : result + m;
    };

    useEffect(() =>{ 
        setTimeout(() => {
            setIndex((index + 1) % cards.length + 1);
        }, 3000)
    },[index]);

  return (
    <div>
      <div className="title">Anime World</div>
      <hr />
      <div className="carousel">
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else {
            className = "card";
          }
          return (
            <img
              key={item.id}
              src={item.image}
              alt="pic"
              className={className}
            />
          );
        })}
      </div>
      <hr />
      <div className="body"></div>
    </div>
  );
};

export default Carousel;
