import React from "react";
import { connect } from "react-redux";
import Destino from "./Destino/Destino";
import styles from "./Destinos.module.css";
import '../../index.css'

const Destinos = ({ products }) => {
  return (
    <div>
      <div className="main_title">
        <h4 className="title_primary">Viagens Perfeitas</h4>
        <h1 className="title_secondary">Nossos Destinos</h1>
      </div>

      <div className={styles.container_dest}>
        {products.map((product) => (
          <Destino key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Destinos);
