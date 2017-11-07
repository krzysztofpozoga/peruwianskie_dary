import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="facebookLike">
              <button>Lubię to!</button>
            </div>
          </div>
          <div className="row">
            <div className="searcher" style={{display: this.props.display}}>
              <form className="search">
                <input  id='searchText' type="text" placeholder="  Wyszukaj na stronie..."/>
                <IndexLink to="/search"><input type="submit" value="Szukaj"/></IndexLink>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
