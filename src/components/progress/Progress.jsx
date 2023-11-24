import { useState } from "react";
import "./Progress.scss";

import progressBg from "../../assets/images/progress.png";
import play from "../../assets/icons/play.svg";
import MyModal from "../modal/Modal";

const Progress = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [complex] = useState([
        {
            date: "Декабрь 2022",
            video: "https://www.youtube.com/embed/Tij4WCkO7fI?si=HWwYG_-t--0-5s11",
        },
        {
            date: "Январь 2023",
            video: "https://www.youtube.com/embed/Tij4WCkO7fI?si=HWwYG_-t--0-5s11",
        },
        {
            date: "Февраль 2023",
            video: "https://www.youtube.com/embed/Tij4WCkO7fI?si=HWwYG_-t--0-5s11",
        },
    ]);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <section className="progress">
            <h2 className="title">Ход строительства</h2>
            <div className="progress-wrapper">
                {complex.map((item, index) => (
                    <div className="progress-item" key={index}>
                        <img src={progressBg} alt="background" />
                        <h4 className="progress-item-title">{item.date}</h4>
                        <div className="progress-item-play" onClick={showModal}>
                            <img src={play} alt="play" />
                        </div>
                        <MyModal
                            isModalVisible={isModalVisible}
                            handleOk={handleOk}
                            handleCancel={handleCancel}
                            src={item.video}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Progress;
