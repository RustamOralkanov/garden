import "./Features.scss";
import Arrow from "../common/Arrow";

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="features-grid">
                <div className="features-item item-1">
                    <h3 className="features-item-title">Выгода</h3>
                    <p className="features-item-text">
                        Новый формат идеально подходит для тех, кто не хочет
                        тратить средства, силы и время на ремонт. Квартиры в
                        RAMS Garden передаются владельцу с чистовым ремонтом,
                        комплектом сантехники и встроенной кухней. Заезжайте в
                        готовую собственную квартиру и наслаждайтесь жизнью в
                        комфорте с первых дней.
                    </p>
                    <span className="features-item-number">01</span>
                    <div className="features-item-overlay">
                        <button className="features-item-btn">
                            <Arrow />
                        </button>
                    </div>
                </div>
                <div className="features-item item-2"></div>
                <div className="features-item item-3">
                    <p className="features-item-text">
                        Отныне квартиры всех классов во всей линейке жилых
                        проектов застройщика будут передаваться владельцу с
                        чистовым ремонтом, комплектом сантехники и кухонным
                        гарнитуром. Подход, который давно применяют в Турции,
                        Сингапуре, Великобритании, Германии, Испании и Чехии, мы
                        реализуем для жителей Казахстана.
                    </p>
                    <div className="features-item-btns">
                        <button>
                            <Arrow />
                        </button>
                        <button>Узнать подробности</button>
                    </div>
                </div>
                <div className="features-item item-4"></div>
                <div className="features-item item-5">
                    <span className="features-item-number">02</span>
                    <h3 className="features-item-title">Чистота и тишина</h3>
                    <p className="features-item-text">
                        С первого дня ввода в эксплуатацию дом будет комфортным
                        и дружелюбным пространством без прежнего шума и «следов»
                        ремонтных бригад.
                    </p>
                    <div className="features-item-overlay">
                        <button className="features-item-btn">
                            <Arrow />
                        </button>
                    </div>
                </div>
                <div className="features-item item-6">
                    <span className="features-item-number">03</span>
                    <h3 className="features-item-title">Дизайн</h3>
                    <p className="features-item-text">
                        Отделка квартир предлагается в современном лаконичном
                        стиле. На базе дизайна, представленного в данном
                        формате, легко создать свой индивидуальный интерьер.
                    </p>

                    <div className="features-item-overlay">
                        <button className="features-item-btn">
                            <Arrow />
                        </button>
                    </div>
                </div>
                <div className="features-item item-7"></div>
                <div className="features-item item-8"></div>
            </div>
        </section>
    );
};

export default Features;
