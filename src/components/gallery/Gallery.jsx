import { useState, useEffect } from "react";
import Slider from "../slider/Slider";
import "./Gallery.scss";

import facade1 from "../../assets/images/facade/facade-1.webp";
import facade2 from "../../assets/images/facade/facade-2.webp";
import facade3 from "../../assets/images/facade/facade-3.webp";
import facade4 from "../../assets/images/facade/facade-4.webp";

import yard1 from "../../assets/images/yard/yard-1.webp";
import yard2 from "../../assets/images/yard/yard-2.webp";
import yard3 from "../../assets/images/yard/yard-3.webp";
import yard4 from "../../assets/images/yard/yard-4.webp";
import yard5 from "../../assets/images/yard/yard-5.webp";

const Gallery = () => {
    const [slider, setSlider] = useState([]);
    const [items, setItems] = useState([
        {
            key: "1",
            label: "Фасад",
            active: "active",
            images: [
                {
                    img: facade1,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 1",
                },
                {
                    img: facade2,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 2",
                },
                {
                    img: facade3,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 3",
                },
                {
                    img: facade4,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 4",
                },
            ],
        },
        {
            key: "2",
            label: "Двор",
            active: false,
            images: [
                {
                    img: yard1,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 1",
                },
                {
                    img: yard2,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 2",
                },
                {
                    img: yard3,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 3",
                },
                {
                    img: yard4,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 4",
                },
                {
                    img: yard5,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 5",
                },
            ],
        },
        {
            key: "3",
            label: "Холл",
            active: false,
            images: [
                {
                    img: facade1,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 1",
                },
                {
                    img: facade2,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 2",
                },
                {
                    img: facade3,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 3",
                },
                {
                    img: facade4,
                    descr: "Korem ipsum dolor sit amet, consectetur adipiscing elit. 4",
                },
            ],
        },
    ]);

    const handleFacilities = (index) => {
        const updateItems = items.map((item, idx) => ({
            ...item,
            active: idx === index ? true : false,
        }));

        setItems(updateItems);
        setSlider(updateItems[index].images || []);
    };

    useEffect(() => {
        if (slider.length === 0 && items.length > 0) {
            const defaultFacility = items.find((item) => item.active);
            setSlider(defaultFacility.images || []);
        }
    }, [slider, items]);

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
            <Slider slider={slider} />
        </section>
    );
};

export default Gallery;
