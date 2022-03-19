import React from 'react';
import facebook from '../../images/icons/facebook-brands.svg';
import instagram from '../../images/icons/instagram-brands.svg';
import twitter from '../../images/icons/twitter-brands.svg';
import styles from './Footer.module.css';
import '../../index.css'


const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className={styles.footer_box}>
                <div className={styles.box}>
                    <h3>Links</h3>
                    <a href="#">Home</a>
                    <a href="#">Destinos</a>
                    <a href="#">Promoções</a>
                    <a href="#">Contato</a>
                </div>

                <div className={styles.box}>
                    <h3>Sobre Nós</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est accusantium voluptas enim nemo facilis sit debitis.</p>
                    <ul className={styles.social_icon}>
                        <li><a href="#"><img src={facebook} /></a></li>
                        <li><a href="#"><img src={instagram} /></a></li>
                        <li><a href="#"><img src={twitter} /></a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                <h1 className={styles.credit}> Copyright <span> RECODE</span>&copy; | 2022 </h1>

            </div>
        </div>
    );
};

export default Footer;