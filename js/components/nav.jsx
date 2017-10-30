import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class Nav extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
    return (
      <nav>
        <ul className="menu" style={{display: this.props.display}}>
          <IndexLink to="/" activeClassName="activeLink"><li>Start</li></IndexLink>
          <IndexLink to="/suszone-ziola" activeClassName="activeLink"><li>Suszone zioła</li></IndexLink>
          <IndexLink to="/maka" activeClassName="activeLink"><li>Maka</li></IndexLink>
          <IndexLink to="/ekstrakty" activeClassName="activeLink"><li>Ekstrakty z ziół</li></IndexLink>
          <IndexLink to="/superfood" activeClassName="activeLink"><li>Super foods</li></IndexLink>
          <IndexLink to="/about" activeClassName="activeLink"><li>O sklepie</li></IndexLink>
          <IndexLink to="/contact" activeClassName="activeLink"><li>Kontakt</li></IndexLink>
        </ul>
      </nav>
    )
  }
}

export default Nav;
