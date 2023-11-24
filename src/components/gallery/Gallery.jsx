import Slider from "../slider/Slider";
import "./Gallery.scss";

import allInOne1 from "../../assets/images/all-in-one-1.jpg";
import allInOne2 from "../../assets/images/all-in-one-2.jpg";
import allInOne3 from "../../assets/images/all-in-one-3.jpg";
import allInOne4 from "../../assets/images/all-in-one-4.jpg";
import allInOne5 from "../../assets/images/all-in-one-5.jpg";
import allInOne6 from "../../assets/images/all-in-one-6.jpg";
import allInOne7 from "../../assets/images/all-in-one-7.jpg";
import { useState } from "react";

const Gallery = () => {
    const [items, setItems] = useState([
        {
            key: "1",
            label: "Фасад",
            active: false,
            images: [
                {
                    img: allInOne1,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    img: allInOne2,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    img: allInOne3,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    img: allInOne4,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    img: allInOne5,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    img: allInOne6,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    img: allInOne7,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
            ],
        },
        {
            key: "2",
            label: "Двор",
            active: false,
            children: "Content of Tab Pane 2",
        },
        {
            key: "3",
            label: "Холл",
            active: false,
            children: "Content of Tab Pane 3",
        },
    ]);

    const handleFacilities = (index) => {
        const updateItems = items.map((item, idx) => ({
            ...item,
            active: idx === index ? true : false,
        }));

        setItems(updateItems);
    };

    return (
        <section className="gallery" id="gallery">
            <div className="gallery-top">
                <h2 className="title">Галерея</h2>
                <div className="gallery-tabs">
                    {items.map((item, index) => (
                        <div
                            className={`gallery-tab ${
                                item.active ? "active" : ""
                            }`}
                            key={index}
                            onClick={() => handleFacilities(index)}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
            <Slider slider={items[0].images} />
        </section>
    );
};

export default Gallery;
