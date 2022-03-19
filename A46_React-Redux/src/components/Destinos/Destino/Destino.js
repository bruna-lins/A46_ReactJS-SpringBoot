import React from "react";
import mapmarker from "../../../images/icons/map-marked-alt-solid.svg"
import styles from "./Destino.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Destino = ({ product, addToCart }) => {
  return (
    <div className={styles.destinos}>
      <div className={styles.card_content}>
        <img
          className={styles.main_image}
          src={product.image}
          alt={product.nome}
        />
        <div className={styles.info}>
          <h4 className={styles.title}>
            <img
              className={styles.icon}
              src={mapmarker} />
            {product.nome} </h4>
          <p className={styles.descript}>{product.description}</p>
          <p className={styles.valor}>R$ {product.price}</p>


          <div className={styles.card_btn}>
            <button
              onClick={() => addToCart(product.id)}
              className={styles.btn_1}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Destino);
