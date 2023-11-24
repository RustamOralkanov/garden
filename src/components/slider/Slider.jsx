import React from "react";
import { Button, Carousel } from "antd";

import "./Slider.scss";
import slideArrow from "../../assets/icons/slide-arrow.svg";

const Slider = ({ slider }) => {
    const carouselRef = React.createRef();

    if (slider) {
        return (
            <div className="slider">
                <Carousel
                    ref={carouselRef}
                    dots={false}
                    slidesToShow={1}
                    variableWidth={true}
                >
                    {slider.map((item, index) => (
                        <div className="slider-item" key={index}>
                            <img src={item.img} alt="slide-image" />
                        </div>
                    ))}
                </Carousel>
                <div className="slider-btns">
                    <Button
                        onClick={() => {
                            carouselRef.current.prev();
                        }}
                    >
                        <img
                            src={slideArrow}
                            alt="arrow"
                            className="arrow-prev"
                        />
                    </Button>
                    <Button
                        onClick={() => {
                            carouselRef.current.next();
                        }}
                    >
                        <img src={slideArrow} alt="arrow" />
                    </Button>
                </div>
            </div>
        );
    }
};

export default Slider;
