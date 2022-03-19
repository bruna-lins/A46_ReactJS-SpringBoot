import React, { useState } from "react";
import trash from '../../../images/icons/trash-alt-regular.svg';
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem_image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem_infos}>
        <p className={styles.title}>{item.nome}</p>
        <p className={styles.descript}>{item.description}</p>
        <p className={styles.price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem_actions}>
        <div className={styles.cartItem_qtd}>
          <label htmlFor="qty">Qtd</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles.actions_deleteItemBtn}
        >
          <img
            src={trash}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
