import "./Harmony.scss";
import { useState } from "react";
import MyModal from "../modal/Modal";

import banner from "../../assets/images/harmony-banner.png";
import banner2 from "../../assets/images/harmony-banner-2.png";
import play from "../../assets/icons/play.svg";
import garden from "../../assets/icons/garden.svg";
import glamping from "../../assets/icons/glamping.svg";
import twelve from "../../assets/icons/twelve.svg";

const Harmony = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

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
        <section className="harmony">
            <div className="harmony-banner">
                <img src={banner} alt="banner" />
            </div>
            <div className="harmony-video">
                <div className="label">Видео</div>
                <div className="harmony-header">
                    <h2>
                        Harmony <span>Lifestyle</span>
                    </h2>
                    <p>
                        Возможность заниматься тем, что любишь, является
                        краеугольным камнем баланса вашей жизни. Жилой комплекс
                        RAMS <br /> Garden — это место, где собраны все
                        необходимые элементы для достижения своей собственной
                        гармонии.
                    </p>
                </div>
                <div className="harmony-video-img">
                    <div className="harmony-video-play" onClick={showModal}>
                        <img src={play} alt="play" />
                    </div>
                    <MyModal
                        isModalVisible={isModalVisible}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                        src={
                            "https://www.youtube.com/embed/624Aize8Ar4?si=3cb4K2i_FAif86xy"
                        }
                    />
                </div>
            </div>
            <div className="harmony-accent">
                <p>
                    Строить успешную карьеру, <span>наслаждаться отдыхом</span>{" "}
                    с родными и друзьями или посвящать своё время себе - только
                    вы решаете, что станет главным ингредиентом в рецепте{" "}
                    <span>вашего счастья!</span>
                </p>
            </div>
            <div className="harmony-features">
                <div className="harmony-features-item item-1"></div>
                <div className="harmony-features-item item-2">
                    <img src={garden} alt="image-harmony" />
                    <div>
                        <h3>Зимний сад</h3>
                        <p>
                            RAMS Garden – настоящий сад, полный жизни.
                            Собственный зимний сад во дворе жилого комплекса
                            позволит вам наслаждаться прогулками среди живых
                            экзотических растений круглый год.
                        </p>
                    </div>
                </div>
                <div className="harmony-features-item item-3">
                    <img src={glamping} alt="image-harmony" />
                    <div>
                        <h3>Глэмпинг на крыше</h3>
                        <p>
                            С этого района начинался весь город, поэтому именно
                            в RAMS Garden вам открывается необыкновенный вид на
                            южную столицу. Здесь вам, без сомнений, захочется
                            оказаться в «золотой час», ведь отсюда можно
                            наблюдать самые красивые закаты Алматы. Особенно,
                            если вы отдыхаете в глэмпинг-сфере на крыше своего
                            дома.Создавайте незабываемые воспоминания, обозревая
                            силуэты утопающего в вечерней заре города, в
                            совершенно новом формате.
                        </p>
                    </div>
                </div>
                <div className="harmony-features-item item-4"></div>
            </div>
            <div className="harmony-banner">
                <img src={banner2} alt="banner" />
                <div className="harmony-banner-twelve">
                    <img src={twelve} alt="twelve" />
                    <h5>ЭТАЖЕЙ</h5>
                </div>
            </div>
        </section>
    );
};

export default Harmony;
