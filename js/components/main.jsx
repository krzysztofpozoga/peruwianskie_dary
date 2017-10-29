import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";
import Template from './template.jsx';
import MainPage from './mainPage.jsx';

class Main extends React.Component {
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={MainPage} />
          <Route path="/ziola" component={MainPage} />
          <Route path="/maka" component={MainPage} />
          <Route path="/wyciagizziol" component={MainPage} />
          <Route path="/superfood" component={MainPage} />
          <Route path="/contact" component={MainPage} />
          <Route path="/about" component={MainPage} />
        </Route>
      </Router>
    )
  }
}

export default Main;
