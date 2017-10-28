import React from 'react';
import Header from './header.jsx';
import Icons from './icons.jsx';
import Nav from './nav.jsx';
import MainPage from './mainPage.jsx';
import Footer from './footer.jsx';

class Main extends React.Component {
  render(){
    return (
      <div>
        <div id="main">
            <Header />
            <Icons />
            <Nav />
          <div className="content">
            <MainPage />
          </div>
            <Footer />
        </div>
      </div>
    )
  }
}

export default Main;
