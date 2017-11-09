import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class NotFound extends React.Component {
  render(){
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
