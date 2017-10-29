import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class Nav extends React.Component {
  render(){
    return (
      <nav>
        <ul className="menu">
          <IndexLink to="/" activeClassName="activeLink"><li>Start</li></IndexLink>
          <IndexLink to="/ziola" activeClassName="activeLink"><li>Suszone zioła</li></IndexLink>
          <IndexLink to="/maka" activeClassName="activeLink"><li>Maka</li></IndexLink>
          <IndexLink to="/wyciagizziol" activeClassName="activeLink"><li>Wyciągi z ziół</li></IndexLink>
          <IndexLink to="/superfood" activeClassName="activeLink"><li>Super food</li></IndexLink>
          <IndexLink to="/about" activeClassName="activeLink"><li>O sklepie</li></IndexLink>
          <IndexLink to="/contact" activeClassName="activeLink"><li>Kontakt</li></IndexLink>
        </ul>
      </nav>
    )
  }
}

export default Nav;
