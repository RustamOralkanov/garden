import React from "react";
import { useState } from "react";
import { Button, Carousel } from "antd";

import "./AllInOne.scss";

import allInOne1 from "../../assets/images/all-in-one-1.jpg";
import allInOne2 from "../../assets/images/all-in-one-2.jpg";
import allInOne3 from "../../assets/images/all-in-one-3.jpg";
import allInOne4 from "../../assets/images/all-in-one-4.jpg";
import allInOne5 from "../../assets/images/all-in-one-5.jpg";
import allInOne6 from "../../assets/images/all-in-one-6.jpg";
import allInOne7 from "../../assets/images/all-in-one-7.jpg";

import slideArrow from "../../assets/icons/slide-arrow.svg";

const AllInOne = () => {
    const carouselRef = React.createRef();
    const [facilities] = useState([
        { name: "Детская комната", active: false },
        { name: "Йога центр", active: false },
        { name: "Караоке зал", active: true },
        { name: "Кинотеатр", active: false },
        { name: "Спортивный зал", active: false },
        { name: "Кинотеатр", active: false },
    ]);

    const [slider] = useState([
        { img: allInOne1, alt: "Первый слайд" },
        { img: allInOne2, alt: "Второй слайд" },
        { img: allInOne3, alt: "Третий слайд" },
        { img: allInOne4, alt: "Четвертый слайд" },
        { img: allInOne5, alt: "Пятый слайд" },
        { img: allInOne6, alt: "Шестой слайд" },
        { img: allInOne7, alt: "Седьмой слайд" },
    ]);

    return (
        <div className="all-in-one">
            <div className="all-in-one_grid">
                <div className="all-in-one_item item-1">
                    <h2 className="all-in-one_title">All-in-One</h2>
                    <p>
                        В жилом комплексе RAMS Garden вам доступны тематические
                        комнаты инновационной системы All-in-One. Здесь каждый
                        найдет то, что ему необходимо для покорения новых высот
                        в бизнесе или для того, чтобы расслабиться и забыть о
                        повседневных заботах.
                    </p>
                </div>
                <div className="all-in-one_item item-2">
                    <div className="item-2-carousel">
                        <Carousel
                            effect="fade"
                            ref={carouselRef}
                            dots={false}
                            slidesToShow={1}
                        >
                            {slider.map((item, index) => (
                                <div
                                    className="all-in-one_item-slide"
                                    key={index}
                                >
                                    <img src={item.img} alt="slide-image" />
                                </div>
                            ))}
                        </Carousel>

                        <div className="item-2-btns">
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
                    <div className="item-2-info">
                        <div className="label">Спортивный зал</div>
                        <p className="text">
                            В жилом комплексе RAMS Garden вам доступны
                            тематические комнаты инновационной системы
                            All-in-One. Здесь каждый найдет то, что ему
                            необходимо для покорения новых высот в бизнесе или
                            для того, чтобы расслабиться и забыть о повседневных
                            заботах.
                        </p>
                    </div>
                </div>
                <div className="all-in-one_item item-3">
                    <ul className="all-in-one_list">
                        {facilities.map((item, index) => (
                            <li
                                className={item.active ? "active" : ""}
                                key={index}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AllInOne;
