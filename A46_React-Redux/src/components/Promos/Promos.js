import React from "react";
import mapmarker from '../../images/icons/map-marked-alt-solid.svg';
import carnaval from '../../images/promos/carnaval.jpg';
import ferias from '../../images/promos/vocation.jpg';
import anonovo from '../../images/promos/anonovo.jpg';
import styles from './Promos.module.css';

const Promos = () => {
    return (
        <div>
            <div className="main_title">
                <h1 className="title_secondary">Nossas Promoções</h1>
            </div>

            <div className={styles.promos}>
                    <div className={styles.card_content}>
                        <img className={styles.main_img} src={carnaval} alt="" />
                        <div className={styles.info}>
                            <h4 className={styles.title}><img className={styles.icon} src={mapmarker} /> Carnaval </h4>
                            <p className={styles.descript}> Lorem ipsum dolor sit amet consectetur. </p>
                            <h6 className={styles.valor}> - 30% </h6>
                            <div className={styles.card_btn}>
                                <a href="#" className={styles.btn_1}>Adicionar ao Carrinho</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card_content}>
                        <img className={styles.main_img} src={ferias} alt="" />
                        <div className={styles.info}>
                            <h4 className={styles.title}><img className={styles.icon} src={mapmarker} /> Férias </h4>
                            <p className={styles.descript}> Lorem ipsum dolor sit amet consectetur. </p>
                            <h6 className={styles.valor}> - 30% </h6>
                            <div className={styles.card_btn}>
                                <a href="#" className={styles.btn_1}>Adicionar ao Carrinho</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card_content}>
                        <img className={styles.main_img}src={anonovo} alt="" />
                        <div className={styles.info}>
                            <h4 className={styles.title}><img className={styles.icon} src={mapmarker} /> Reveillon </h4>
                            <p className={styles.descript}> Lorem ipsum dolor sit amet consectetur. </p>
                            <h6 className={styles.valor}> - 30% </h6>
                            <div className={styles.card_btn}>
                                <a href="#" className={styles.btn_1}>Adicionar ao Carrinho</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Promos;