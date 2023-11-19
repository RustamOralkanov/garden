import "./Quality.scss";
import Arrow from "../common/Arrow";

const Quality = () => {
    return (
        <div className="quality">
            <div className="quality-grid">
                <div className="quality-item item-1">
                    <h4 className="trim-top">Чистовая отделка</h4>
                </div>
                <div className="quality-item item-2">
                    <h2 className="trim-text">
                        Мировое <span>восприятие</span> <br /> качества
                    </h2>
                </div>
                <div className="quality-item item-3">
                    <p className="features-item-text">
                        Квартиры передаются жильцам в чистовой отделке с полным
                        комплектом сантехники и встроенной кухней. Больше не
                        нужно искать жилье на время ремонта и приспосабливаться
                        к другим ограничениям. Достаточно лишь завезти мебель –
                        новая квартира уже готова к заселению.
                    </p>
                    <div className="features-item-btns">
                        <button>
                            <Arrow />
                        </button>
                        <button>Узнать подробности</button>
                    </div>
                </div>
                <div className="quality-item item-4"></div>
                <div className="quality-item item-5"></div>
            </div>
        </div>
    );
};

export default Quality;
