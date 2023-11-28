import { useState, useEffect } from "react";
import "./Filter.scss";
import MultiRangeSlider from "../multirangeslider/MuiltiRangeSlider";

const Prices = ({ title, price, start, end, onInputValueChange }) => {
    const [min, setMin] = useState(start);
    const [max, setMax] = useState(end);
    const [inputValue, setInputValue] = useState([min, max]);

    useEffect(() => {
        setInputValue([min, max]);
    }, [min, max]);

    const onMinChange = (event) => {
        const value = parseInt(event.target.value);
        setMin(value);
        setInputValue([value, max]);
    };
    const onMaxChange = (event) => {
        const value = parseInt(event.target.value);
        setMax(value);
        setInputValue([min, value]);
    };

    const onRangeChange = (newValue) => {
        const minValue = newValue[0];
        const maxValue = newValue[1];

        setMin(minValue);
        setMax(maxValue);

        function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        onInputValueChange(
            `${numberWithSpaces(minValue)} - ${numberWithSpaces(maxValue)} ${
                price ? "₸" : "м2"
            }`
        );
    };

    return (
        <div className="filter-item">
            <h3 className="filter-item-grey">{title}</h3>
            <div className="filter-item-prices">
                <div>
                    <span className="filter-item-grey">от</span>
                    <input
                        type="number"
                        placeholder="10 000 000"
                        className="filter-item-black"
                        id="min"
                        value={min}
                        onChange={onMinChange}
                    />
                </div>
                <span className="line">&mdash;</span>
                <div>
                    <span className="filter-item-grey">до</span>
                    <input
                        type="number"
                        placeholder="12 000 000"
                        className="filter-item-black"
                        id="max"
                        value={max}
                        onChange={onMaxChange}
                    />
                    {price ? (
                        <span className="filter-item-grey">₸</span>
                    ) : (
                        <span className="filter-item-grey">м2</span>
                    )}
                </div>
                <MultiRangeSlider
                    value={inputValue}
                    onChange={onRangeChange}
                    min={min}
                    max={max}
                    price={price}
                />
            </div>
        </div>
    );
};

export default Prices;
