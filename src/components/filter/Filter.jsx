import { useEffect, useState } from "react";

import "./Filter.scss";
import whiteArrow from "../../assets/icons/arrow-white.svg";
import Cross from "../common/Cross";
import MultiRangeSlider from "../multirangeslider/MuiltiRangeSlider";
import Prices from "./Prices";

const Filter = () => {
    const rooms = [
        {
            count: 1,
            title: "1 комнатный",
        },
        {
            count: 2,
            title: "2х комнатные",
        },
        {
            count: 3,
            title: "3х комнатные",
        },
        {
            count: 4,
            title: "4х комнатные",
        },
    ];
    const [parentInputValue, setParentInputValue] = useState([
        45000000, 160000000,
    ]);
    const [areaInputValue, setAreaInputValue] = useState([36.8, 148.4]);
    const [values, setValues] = useState([]);

    const handleRooms = (value) => {
        if (values.includes(value)) {
            setValues((current) => current.filter((item) => item !== value));
        } else {
            setValues((current) => [...current, value]);
        }
    };

    const handleInputValueChange = (value) => {
        if (value.includes("₸")) {
            setParentInputValue([value]);
            setValues((current) => [
                ...current.filter((item) => !item.includes("₸")),
                value,
            ]);
        } else if (value.includes("м2")) {
            setAreaInputValue([value]);
            setValues((current) => [
                ...current.filter((item) => !item.includes("м2")),
                value,
            ]);
        }
    };

    const handleFilter = () => {
        setValues([]);
    };

    const onRemoveItem = (indexToRemove) => {
        const updatedValues = values.filter(
            (_, index) => index !== indexToRemove
        );
        setValues(updatedValues);
    };

    return (
        <section className="filter">
            <div className="filter-wrapper">
                <div className="filter-item">
                    <h3 className="filter-item-grey">Выберите комнтаность</h3>
                    <div className="filter-item-btns">
                        {rooms.map((item, index) => (
                            <button
                                className={`filter-item-btn filter-item-black ${
                                    values.includes(item.title) ? "active" : ""
                                }`}
                                key={index}
                                onClick={() => handleRooms(item.title)}
                            >
                                {item.count}
                            </button>
                        ))}
                    </div>
                </div>
                <Prices
                    title={"Стоимость"}
                    price={true}
                    start={45000000}
                    end={160000000}
                    onInputValueChange={handleInputValueChange}
                />
                <Prices
                    title={"Общая площадь"}
                    price={false}
                    start={36.8}
                    end={148.4}
                    onInputValueChange={handleInputValueChange}
                />
                <div className="filter-item">
                    <div className="filter-item-actions">
                        <button className="filter-item-show">
                            Показать &nbsp;<b>23</b>&nbsp; объекта
                        </button>
                        <button className="filter-item-show">
                            <img src={whiteArrow} alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
            {values.length > 0 ? (
                <div className="filter-values">
                    {values.map((item, index) => (
                        <div
                            className="filter-value"
                            key={index}
                            onClick={() => onRemoveItem(index)}
                        >
                            <h5>{item}</h5>
                            <Cross />
                        </div>
                    ))}
                    <div className="filter-value clear" onClick={handleFilter}>
                        <h5>Очистить все</h5>
                        <Cross />
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default Filter;
