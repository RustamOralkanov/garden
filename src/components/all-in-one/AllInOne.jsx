import { useState, useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Pagination, Navigation } from "swiper/modules";

import "./AllInOne.scss";

import allInOne1 from "../../assets/images/all-in-one-1.jpg";
import allInOne2 from "../../assets/images/all-in-one-2.jpg";
import allInOne3 from "../../assets/images/all-in-one-3.jpg";
import allInOne4 from "../../assets/images/all-in-one-4.jpg";
import allInOne5 from "../../assets/images/all-in-one-5.jpg";
import allInOne6 from "../../assets/images/all-in-one-6.jpg";
import allInOne7 from "../../assets/images/all-in-one-7.jpg";

register();

const AllInOne = () => {
    const swiperElRef = useRef(null);
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

    useEffect(() => {
        swiperElRef.current.addEventListener("swiperprogress", (e) => {
            const [swiper] = e.detail;
            console.log(swiper.activeIndex, 1);
        });
    }, []);

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
                    <swiper-container
                        ref={swiperElRef}
                        slides-per-view="1"
                        pagination={{
                            type: "fraction",
                        }}
                        modules={[Pagination, Navigation]}
                        class="all-in-one_swiper"
                    >
                        {slider.map((item, index) => {
                            return (
                                <swiper-slide
                                    class="all-in-one_swiper__item"
                                    key={index}
                                >
                                    <img src={item.img} alt={item.alt} />
                                </swiper-slide>
                            );
                        })}
                    </swiper-container>
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
