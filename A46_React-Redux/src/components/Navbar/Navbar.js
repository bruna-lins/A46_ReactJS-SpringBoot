import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import search from '../../images/icons/search-solid.svg';
import cartimg from '../../images/icons/cart-arrow-down-solid.svg';
import user from '../../images/icons/user-solid.svg';
import bars from '../../images/icons/bars-solid.svg';
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div>
      <div className={styles.header}>
        <div id="menu-bar"><img src={bars} /></div>
        <Link to="/">
          <div className={styles.logo}>A<span>46</span></div>
        </Link>
        <nav className={styles.navbar}>
          <Link to="/">Home</Link>
          <Link to="/destinos">Destinos</Link>
          <Link to="/promos">Promoções</Link>
          <Link to="/management"> Gerenciamento </Link>
        </nav>
        <div className={styles.icons}>
          <img id={styles.search_btn} src={search} alt="pesquisa" />
          <img src={user} alt="usuario" />
          <div className={styles.cart_cont}>
            <Link to="/cart" >
              <img src={cartimg}
                className={styles.cart}
                alt="carrinho de compras" />
              <div className={styles.cart_counter}>{cartCount}</div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
