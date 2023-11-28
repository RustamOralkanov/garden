import { useState } from "react";
import "./Progress.scss";

import progressBg from "../../assets/images/progress.png";
import play from "../../assets/icons/play.svg";
import MyModal from "../modal/Modal";

const Progress = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");
    const [complex] = useState([
        {
            date: "Август 2023",
            video: "https://www.youtube.com/embed/Tij4WCkO7fI?si=DVIVnlx-DEKULPXW",
        },
        {
            date: "Ноябрь 2023",
            video: "https://www.youtube.com/embed/vswCBq3HEh4?si=JINl8Ia0AcTgaCxf",
        },
    ]);

    const showModal = (video) => {
        setVideoUrl(video);
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
                        <div
                            className="progress-item-play"
                            onClick={() => showModal(item.video)}
                        >
                            <img src={play} alt="play" />
                        </div>
                    </div>
                ))}
            </div>
            <MyModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                src={videoUrl}
            />
        </section>
    );
};

export default Progress;
