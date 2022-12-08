import React from "react";
import "./style.scss";

const Carousel = () => {
  return (
    <div>
      <div className="carousel">
        <img
          className="card card--active"
          src="https://img-9gag-fun.9cache.com/photo/aDgreo9_700bwp.webp"
          alt=""
        ></img>
        <img
          className="card card--left"
          src="https://chasinganime.com/wp-content/uploads/2021/02/baki21-1024x576.jpg"
          alt=""
        ></img>
        <img
          className="card card--right"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58ZKuKpDCEOHqaKqEIC-T8tyOzAL4gZNuXg&usqp=CAU"
          alt=""
        ></img>
        <img
          className="card"
          src="https://phando021.s.llnwi.net/public/upload/news/story_mul_image_1622563397_7.jpg"
          alt=""
        ></img>
        <img
          className="card"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztl-ilJPvBC6TetFYzMKxczPe3YF2m-FPmw&usqp=CAU"
          alt=""
        ></img>
        <img
          className="card"
          src="https://www.fanbolt.com/storage/2021/12/demon-slayer-anime-800x500.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Carousel;
