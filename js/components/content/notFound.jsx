import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class NotFound extends React.Component {
  render(){
    let app = document.getElementById('app');
    if (window.innerWidth >= 768) {
      app.style.backgroundImage	=	"url(images/Fotolia_130262458_L.jpg)";
    }
    return (
        <div className="notFound">
          <div className="container">
            <h1>Uuuups! <br/>Error 404</h1>
            <p>Page not found</p>
          </div>
        </div>
    )
  }
}

export default NotFound;
