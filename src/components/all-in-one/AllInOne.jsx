import React from "react";
import { useState, useEffect } from "react";
import { Button, Carousel } from "antd";

import "./AllInOne.scss";

import Kids1 from "../../assets/images/kids/1.jpg";
import Kids2 from "../../assets/images/kids/2.jpg";
import Kids3 from "../../assets/images/kids/3.jpg";
import Kids4 from "../../assets/images/kids/4.jpg";
import Kids5 from "../../assets/images/kids/5.jpg";

import Yoga1 from "../../assets/images/yoga/1.jpg";
import Yoga2 from "../../assets/images/yoga/2.jpg";
import Yoga3 from "../../assets/images/yoga/3.jpg";
import Yoga4 from "../../assets/images/yoga/4.jpg";
import Yoga5 from "../../assets/images/yoga/5.jpg";

import Karaoke1 from "../../assets/images/karaoke/1.jpg";
import Karaoke2 from "../../assets/images/karaoke/2.jpg";
import Karaoke3 from "../../assets/images/karaoke/3.jpg";
import Karaoke4 from "../../assets/images/karaoke/4.jpg";
import Karaoke5 from "../../assets/images/karaoke/5.jpg";

import Cinema1 from "../../assets/images/cinema/1.jpg";
import Cinema2 from "../../assets/images/cinema/2.jpg";
import Cinema3 from "../../assets/images/cinema/3.jpg";
import Cinema4 from "../../assets/images/cinema/4.jpg";
import Cinema5 from "../../assets/images/cinema/5.jpg";

import Gym1 from "../../assets/images/gym/1.jpg";
import Gym2 from "../../assets/images/gym/2.jpg";
import Gym3 from "../../assets/images/gym/3.jpg";
import Gym4 from "../../assets/images/gym/4.jpg";
import Gym5 from "../../assets/images/gym/5.jpg";

import Entertaiment1 from "../../assets/images/entertainment/1.jpg";
import Entertaiment2 from "../../assets/images/entertainment/2.jpg";
import Entertaiment3 from "../../assets/images/entertainment/3.jpg";
import Entertaiment4 from "../../assets/images/entertainment/4.jpg";
import Entertaiment5 from "../../assets/images/entertainment/5.jpg";

import slideArrow from "../../assets/icons/slide-arrow.svg";

const AllInOne = () => {
    const carouselRef = React.createRef();
    const [facility, setFacility] = useState("");
    const [slider, setSlider] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [facilities, setFacilities] = useState([
        {
            name: "Детская комната",
            active: true,
            images: [
                { img: Kids1 },
                { img: Kids2 },
                { img: Kids3 },
                { img: Kids4 },
                { img: Kids5 },
            ],
        },
        {
            name: "Йога центр",
            active: false,
            images: [
                { img: Yoga1 },
                { img: Yoga2 },
                { img: Yoga3 },
                { img: Yoga4 },
                { img: Yoga5 },
            ],
        },
        {
            name: "Караоке зал",
            active: false,
            images: [
                { img: Karaoke1 },
                { img: Karaoke2 },
                { img: Karaoke3 },
                { img: Karaoke4 },
                { img: Karaoke5 },
            ],
        },
        {
            name: "Кинотеатр",
            active: false,
            images: [
                { img: Cinema1 },
                { img: Cinema2 },
                { img: Cinema3 },
                { img: Cinema4 },
                { img: Cinema5 },
            ],
        },
        {
            name: "Спортивный зал",
            active: false,
            images: [
                { img: Gym1 },
                { img: Gym2 },
                { img: Gym3 },
                { img: Gym4 },
                { img: Gym5 },
            ],
        },
        {
            name: "Комната развлечений",
            active: false,
            images: [
                { img: Entertaiment1 },
                { img: Entertaiment2 },
                { img: Entertaiment3 },
                { img: Entertaiment4 },
                { img: Entertaiment5 },
            ],
        },
    ]);

    const handleFacilities = (index) => {
        const updatedFacilities = facilities.map((item, idx) => ({
            ...item,
            active: idx === index ? true : false,
        }));
        setActiveSlide(0);
        setFacilities(updatedFacilities);
        setFacility(updatedFacilities[index].name || "");
        setSlider(updatedFacilities[index].images || []);
    };

    useEffect(() => {
        if (slider.length === 0 && facilities.length > 0) {
            const defaultFacility = facilities.find((item) => item.active);
            setSlider(defaultFacility.images || []);
            setFacility(defaultFacility.name || "");
        }
    }, [slider, facilities]);

    return (
        <section className="all-in-one" id="all-in-one">
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
                            beforeChange={(current, next) =>
                                setActiveSlide(next)
                            }
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
                            <div className="item-2-btns-counter">
                                0{activeSlide + 1}
                            </div>
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
                        <div className="label">{facility}</div>
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
                                onClick={() => handleFacilities(index)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AllInOne;
