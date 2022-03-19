import React from 'react';
import styles from './Header.module.css';
import '../../index.css'

const Home = () => {
    return (
        <div className={styles.home}>
                <div className={styles.content}>
                    <h3>Pensando em Viajar?</h3>
                    <h2>A gente te leva!</h2>
                    <a href="#" className={styles.btn}>Confira nossas ofertas</a>
                </div>
        </div>
    );
};

export default Home;