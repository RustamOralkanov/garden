import { Slider } from "antd";

import "./MultiRangeSlider.scss";

const SliderWithSwitch = ({ value, onChange, price }) => {
    return (
        <>
            <Slider
                range
                defaultValue={value}
                value={value}
                onChange={onChange}
                step={1}
                max={price ? 160000000 : 148.4}
                min={price ? 45000000 : 36.8}
            />
        </>
    );
};

export default SliderWithSwitch;
