import { useEffect, useState } from "react";
import scrollToAnchor from "../utils/anchor";

import "./Banner.scss";
import arrow from "../../assets/icons/arrow.svg";
import logo from "../../assets/icons/logo.svg";

const Banner = () => {
    const [isActive, setIsActive] = useState(false);
    const [nav] = useState([
        {
            name: "Чистовая отделка",
            id: "trim",
        },
        {
            name: "Преимущества",
            id: "features",
        },
        {
            name: "Расположение",
            id: "location",
        },
        {
            name: "All-in-One",
            id: "all-in-one",
        },
        {
            name: "Галерея",
            id: "gallery",
        },
    ]);

    const handleItemClick = (id) => {
        scrollToAnchor({ id });
    };

    useEffect(() => {
        window.addEventListener("scroll", function () {
            this.window.scrollY > 400 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <section className="banner">
            <div className="banner-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className={`banner-nav ${isActive ? "active" : ""}`}>
                <ul className="banner-nav-list">
                    {nav.map((item, index) => (
                        <li
                            onClick={() => handleItemClick(item.id)}
                            key={index}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
                <div className="banner-nav-phone">
                    <a href="tel:+77072124444">+7 707 212 44 44</a>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path
                                d="M10.0035 8.59196L1.41153 0L0 1.41153L8.59097 10.0035H1.01922V12H12V1.01922H10.0035V8.59196Z"
                                fill="#555B66"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <h1 className="banner-title">
                Первый жилой комплекс,
                <br /> реализованный в новом <br />
                формате.
            </h1>
            <div className="banner-request">
                <h3>
                    Оставьте заявку, чтобы получить <br />
                    индивидуальную консультацию!
                </h3>
                <div className="banner-request-btns">
                    <button className="btn-arrow">
                        <img src={arrow} alt="" />
                    </button>
                    <button className="btn-application">Оставить заявку</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
