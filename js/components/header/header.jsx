import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let path = this.props.link
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="fb-like" data-href="..." data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="true" data-colorscheme="dark"></div>
          </div>
          <div className="row">
            <div className="searcher" style={{display: this.props.display}}>
              <form className="search">
                <input  id='searchText' type="text" placeholder="  Wyszukaj na stronie..." onChange={this.props.getText}/>
                <IndexLink to={path}><input type="submit" value="Szukaj"/></IndexLink>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
