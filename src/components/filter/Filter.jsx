import "./Filter.scss";
import whiteArrow from "../../assets/icons/arrow-white.svg";
import Cross from "../common/Cross";

const Filter = () => {
    return (
        <section className="filter">
            <div className="filter-wrapper">
                <div className="filter-item">
                    <h3 className="filter-item-grey">Выберите комнтаность</h3>
                    <div className="filter-item-btns">
                        <button className="filter-item-btn filter-item-black">
                            1
                        </button>
                        <button className="filter-item-btn filter-item-black">
                            2
                        </button>
                        <button className="filter-item-btn filter-item-black">
                            3
                        </button>
                        <button className="filter-item-btn filter-item-black">
                            4+
                        </button>
                    </div>
                </div>
                <div className="filter-item">
                    <h3 className="filter-item-grey">Стоимость</h3>
                    <div className="filter-item-prices">
                        <div>
                            <span className="filter-item-grey">от</span>
                            <input
                                type="number"
                                placeholder="0"
                                className="filter-item-black"
                            />
                        </div>
                        <span className="line">&mdash;</span>
                        <div>
                            <span className="filter-item-grey">до</span>
                            <input
                                type="number"
                                placeholder="0"
                                className="filter-item-black"
                            />
                            <span className="filter-item-grey">₸</span>
                        </div>
                    </div>
                </div>
                <div className="filter-item">
                    <h3 className="filter-item-grey">Общая площадь</h3>
                    <div className="filter-item-prices">
                        <div>
                            <span className="filter-item-grey">от</span>
                            <input
                                type="number"
                                placeholder="0"
                                className="filter-item-black"
                            />
                        </div>
                        <span className="line">&mdash;</span>
                        <div>
                            <span className="filter-item-grey">до</span>
                            <input
                                type="number"
                                placeholder="0"
                                className="filter-item-black"
                            />
                            <span className="filter-item-grey">м2</span>
                        </div>
                    </div>
                </div>
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
            <div className="filter-values">
                <div className="filter-value">
                    <h5>2х комнатные</h5>
                    <Cross />
                </div>
                <div className="filter-value">
                    <h5>12 000 000 - 35 000 000 ₸</h5>
                    <Cross />
                </div>
                <div className="filter-value">
                    <h5>25 - 91 м2</h5>
                    <Cross />
                </div>
                <div className="filter-value clear">
                    <h5>Очистить все</h5>
                    <Cross />
                </div>
            </div>
        </section>
    );
};

export default Filter;
