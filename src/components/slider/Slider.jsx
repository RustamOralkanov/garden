import React, { useState, useEffect } from "react";
import { Button, Carousel } from "antd";

import "./Slider.scss";
import slideArrow from "../../assets/icons/slide-arrow.svg";

const Slider = ({ slider }) => {
    const carouselRef = React.createRef();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [carouselKey, setCarouselKey] = useState(0);

    useEffect(() => {
        setCarouselKey((key) => key + 1);
        setCurrentSlideIndex(0);
    }, [slider]);

    if (slider) {
        return (
            <div className="slider">
                <Carousel
                    key={carouselKey}
                    ref={carouselRef}
                    dots={false}
                    slidesToShow={1}
                    variableWidth={true}
                    afterChange={(index) => setCurrentSlideIndex(index)}
                >
                    {slider.map((item, index) => (
                        <div className="slider-item" key={index}>
                            <img src={item.img} alt="slide-image" />
                        </div>
                    ))}
                </Carousel>
                <div className="slider-whitespace"></div>
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
                <div className="slider-descr">
                    <div className="slider-descr-counter">
                        <div>
                            <span>{currentSlideIndex + 1}</span>
                            <span>&nbsp;/&nbsp;{slider.length}</span>
                        </div>
                        <div>
                            {slider.map((item, index) => (
                                <p
                                    key={index}
                                    style={{
                                        display:
                                            index === currentSlideIndex
                                                ? "block"
                                                : "none",
                                    }}
                                >
                                    {item.descr}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Slider;
