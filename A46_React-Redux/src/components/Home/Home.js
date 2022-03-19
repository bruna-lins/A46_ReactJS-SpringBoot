import React from 'react';
import { Link } from 'react-router-dom';
import global from '../../images/icons/globe-americas-solid.svg';
import cash from '../../images/icons/dollar-sign-solid.svg';
import safe from '../../images/icons/user-shield-solid.svg';
import './Home.css';
import '../../index.css'

const Home = () => {
    return (
        <div>
            <div className="main_title">
                <h4 className="title_primary">Qualidade Garantida</h4>
                <h1 className="title_secondary">Nossos Serviços</h1>
            </div>
            <div className="home">
                <div className="card_services">
                    <img className="main_img" src={global} alt="" />
                    <div className="infos">
                        <h4 className="title"> Destinos pelo Mundo</h4>
                        <p className="descript"> Escolhemos a dedo os melhores <br /> destinos do mundo para você.</p>
                        <Link to="/destinos">
                        <div className="card_btn">
                            <button className="btn_">Saiba mais</button>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="card_services">
                    <img className="main_img" src={cash} alt="" />
                    <div className="infos">
                        <h4 className="title"> Melhores preços</h4>
                        <p className="descript"> Os melhores destinos pelos melhores preços, <br /> a gente garante!</p>
                        <Link to="/destinos">
                        <div className="card_btn">
                            <button className="btn_">Saiba mais</button>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="card_services">
                    <img className="main_img" src={safe} alt="" />
                    <div className="infos">
                        <h4 className="title"> Com maior segurança</h4>
                        <p className="descript"> Garantimos a segurança da sua viagem,  <br /> da compra ao retorno!</p>
                        <Link to="/destinos">
                        <div className="card_btn">
                            <button className="btn_">Saiba mais</button>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;