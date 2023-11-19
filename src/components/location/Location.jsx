import { useState } from "react";

import "./Location.scss";
import map from "../../assets/icons/map.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import bag from "../../assets/icons/bag.svg";
import university from "../../assets/icons/university.svg";
import kokTobe from "../../assets/icons/kok-tobe.svg";
import car from "../../assets/icons/car.svg";

const LocationPoints = ({ name, icon, minutes }) => {
    return (
        <div className="location-item-point">
            <img src={arrowLeft} alt="arrow-left" />
            <img src={icon} alt="arrow-left" />
            <div>
                <h4>{name}</h4>
                <span>
                    <img src={car} alt="car" />
                    <span>{minutes}</span>
                </span>
            </div>
        </div>
    );
};

const Location = () => {
    const [locations] = useState([
        {
            name: "Turan University",
            icon: university,
            minutes: "8 минут",
        },
        {
            name: "UIB University",
            icon: university,
            minutes: "7 минут",
        },
        {
            name: "KIMEP University",
            icon: university,
            minutes: "6 минут",
        },
        {
            name: "ТРЦ Dostyk Plaza",
            icon: bag,
            minutes: "5 минут",
        },
        {
            name: "Кок-Тобе",
            icon: kokTobe,
            minutes: "10 минут",
        },
    ]);

    return (
        <div className="location">
            <div className="location-grid">
                <div className="location-item item-1">
                    <div className="label">карта</div>
                </div>
                <div className="location-item item-2">
                    <h2 className="location-title">Расположение</h2>
                    <p className="location-text">
                        Расположение жилого комплекса в максимально удобной
                        локации снижает риск опозданий и позволяет вам всегда
                        смело строить свои планы: будь то финансовые сделки в
                        деловом центре города, поездка в аэропорт или неспешные
                        семейные прогулки в Центральном Парке
                        Отдыха.Наслаждайтесь размеренной жизнью в историческом
                        районе «Компота» с живописным видом на Кок Тобе.
                    </p>
                </div>
                <div className="location-item item-3">
                    <img src={map} alt="map" />
                    <div className="location-item-points">
                        {locations.map((item, index) => {
                            return <LocationPoints {...item} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
