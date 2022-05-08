import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import Contact from "./Componets/Contact";
import Cart from './Componets/Cart';
import Shop from './Componets/Shop';
import Checkout from "./Componets/Redux/Checkout";
import Productdetail from "./Componets/Productdetail"
import { Switch, Route } from "react-router-dom";





const App = () => {
  return (
    <>
      <Navbar />
      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/productdetail/:id" component={Productdetail} />
        
      </Switch>

    </>
  )
}

export default App;