import React from 'react';
import Header from './header.jsx';
import Icons from './icons.jsx';
import Nav from './nav.jsx';
import MainPage from './mainPage.jsx';
import Footer from './footer.jsx';

class Template extends React.Component {
  searchProduct = (event) => {
      event.preventDefault();
      console.log('AAAA');
    }
  render(){
    return (
      <div>
        <div id="all">
            <Header searchProduct={this.searchProduct}/>
            <Icons />
            <Nav />
          <div className="content">{this.props.children}</div>
            <Footer />
        </div>
      </div>
    )
  }
}

export default Template;
