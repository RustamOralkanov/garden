import "./Banner.scss";
import arrow from "../../assets/icons/arrow.svg";
import logo from "../../assets/icons/logo.svg";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-logo">
                <img src={logo} alt="logo" />
            </div>
            <h1 className="banner-title">
                Первый жилой комплекс,
                <br /> реализованный в новом <br />
                формате.
            </h1>
            <div className="banner-request">
                <h3>
                    Оставьте заявку, чтобы получить <br />
                    индивидуальную консультацию!
                </h3>
                <div className="banner-request-btns">
                    <button className="btn-arrow">
                        <img src={arrow} alt="" />
                    </button>
                    <button className="btn-application">Оставить заявку</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
