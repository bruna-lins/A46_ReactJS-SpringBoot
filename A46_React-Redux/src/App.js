import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Destinos from "./components/Destinos/Destinos";
import Promos from "./components/Promos/Promos";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ListDestinos from "./components/Management/ListDestinos";
import AddDestinos from "./components/Management/AddDestinos";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Header />
        <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/destinos" component={Destinos} />
          <Route exact path="/promos" component={Promos} />
          <Route exact path="/cart" component={Cart} />
          <div className="container">
          <Route exact path="/management" component={ListDestinos} />
          <Route path="/add-destino" component={AddDestinos} />
          <Route path = "/edit-destino/:id" component = {AddDestinos} />
          </div>
        </Switch>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
