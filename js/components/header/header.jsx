import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let path = `/search`
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="fb-like" data-href="https://www.facebook.com/Odnowa-jedzeniowa-1775376272699270/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
          </div>
          <div className="row">
            <div className="searcher" style={{display: this.props.display}}>
              <form className="search">
                <input  id='searchText' type="text" placeholder="  Wyszukaj na stronie..."/>
                <IndexLink to={path}><input type="submit" value="Szukaj" onClick={this.props.getText}/></IndexLink>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
