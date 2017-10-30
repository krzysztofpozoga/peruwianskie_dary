import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";
import Template from './template.jsx';
import MainPage from './mainPage.jsx';
import SuszoneZiola from './suszoneZiola.jsx';
import AboutShop from './aboutShop.jsx';
import Contact from './contact.jsx';
import EachProduct from './eachProduct.jsx';
import TemplateProduct from './templateProduct.jsx';

class Main extends React.Component {
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={MainPage} />
          <Route path="/suszone-ziola" component={TemplateProduct} >
            <IndexRoute component={SuszoneZiola} />
            <Route path=":id" component={EachProduct} />
          </Route>
          <Route path="/maka" component={MainPage} />
          <Route path="/wyciagizziol" component={MainPage} />
          <Route path="/superfood" component={MainPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={AboutShop} />
        </Route>
      </Router>
    )
  }
}

export default Main;
