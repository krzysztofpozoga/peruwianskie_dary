import React from 'react';
import Header from './header.jsx';
import Icons from './icons.jsx';
import Nav from './nav.jsx';
import MainPage from './mainPage.jsx';
import Footer from './footer.jsx';

class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuDisplay: '',
      searcherDisplay: ''
    }
  }
  searchProduct = (event) => {
    event.preventDefault();
    console.log('AAAA');
  }

  showAndHideMenu = (event) => {
    if (this.state.menuDisplay === '') {
      this.setState({
        menuDisplay: 'flex'
      })
    } else {
      this.setState({
        menuDisplay: ''
      })
    }
  }

  showAndHideSearcher = (event) => {
    if (this.state.searcherDisplay === '') {
      this.setState({
        searcherDisplay: 'flex'
      })
    } else {
      this.setState({
        searcherDisplay: ''
      })
    }
  }

  render(){
    return (
      <div>
        <div id="all">
          <Header searchProduct={this.searchProduct} display={this.state.searcherDisplay}/>
          <Icons showAndHideMenu={this.showAndHideMenu} showAndHideSearcher={this.showAndHideSearcher}/>
          <Nav display={this.state.menuDisplay}/>
          <div className="content">{this.props.children}</div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template;
