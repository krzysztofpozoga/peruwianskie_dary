import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";
import Template from './template.jsx';
import MainPage from './mainPage.jsx';
import SuszoneZiola from './suszoneZiola.jsx';
import Maka from './maka.jsx';
import Ekstrakty from './ekstrakty.jsx';
import SuperFoods from './superfoods.jsx';
import SearchedProducts from './searchedProducts.jsx';
import AboutShop from './aboutShop.jsx';
import Contact from './contact.jsx';
import NotFound from './notFound.jsx';
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
          <Route path="/maka" component={TemplateProduct} >
            <IndexRoute component={Maka} />
            <Route path=":id" component={EachProduct} />
          </Route>
          <Route path="/ekstrakty" component={TemplateProduct} >
            <IndexRoute component={Ekstrakty} />
            <Route path=":id" component={EachProduct} />
          </Route>
          <Route path="/superfoods" component={TemplateProduct} >
            <IndexRoute component={SuperFoods} />
            <Route path=":id" component={EachProduct} />
          </Route>
          <Route path="/search" component={TemplateProduct} >
            <IndexRoute component={SearchedProducts} />
            <Route path=":id" component={EachProduct} />
          </Route>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={AboutShop} />
          <Route path="/*" component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default Main;
