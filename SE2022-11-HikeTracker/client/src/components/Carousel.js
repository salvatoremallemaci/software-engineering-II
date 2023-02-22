import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { default as Image1 } from "../images/image1.jpg";
import { default as Image2 } from "../images/image2.jpg";
import { default as Image3 } from "../images/image3.jpg";
import { default as Image4 } from "../images/image4.jpg";
import { default as Image5 } from "../images/image5.jpg";

import "../styles/Carousel.css";

function MyCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
            <Carousel.Item>
                <img className="d-block carousel-img" src={Image1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block carousel-img" src={Image2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block carousel-img" src={Image3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block carousel-img" src={Image4} alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block carousel-img" src={Image5} alt="fifth slide" />
            </Carousel.Item>
        </Carousel>

    );
}

export default MyCarousel;