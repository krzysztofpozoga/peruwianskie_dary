import React from 'react';
import Header from './header/header.jsx';
import Icons from './header/icons.jsx';
import Nav from './header/nav.jsx';
import Footer from './footer/footer.jsx';
import MainPage from './content/mainPage.jsx';
import SuszoneZiola from './content/suszoneZiola.jsx';
import Maka from './content/maka.jsx';
import Ekstrakty from './content/ekstrakty.jsx';
import SuperFoods from './content/superfoods.jsx';
import AboutShop from './content/aboutShop.jsx';
import Contact from './content/contact.jsx';
import NotFound from './content/notFound.jsx';
import Backdrop from './header/backdrop.jsx';

class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuDisplay: '',
      searcherDisplay: '',
      link: '',
      showBackdrop: false
    }
  }

  showMenu = (event) => {
    if (this.state.menuDisplay === '') {
      this.setState({
        menuDisplay: 'flex',
        showBackdrop: true
      })
    } else {
      this.setState({
        menuDisplay: '',
        showBackdrop: false
      })
    }
  }

  hideMenu = (event) => {
    if (this.state.menuDisplay === 'flex') {
      this.setState({
        menuDisplay: '',
        showBackdrop: false
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

  getText = (event) => {
    this.setState({
        link: event.target.parentElement.previousSibling.value
    })
    event.target.parentElement.previousSibling.value = ''
  }

  render(){
    let childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { link: this.state.link }));
    return (
      <div>
        <div id="all">
          <Header display={this.state.searcherDisplay} getText={this.getText}/>
          <Icons showMenu={this.showMenu} showAndHideSearcher={this.showAndHideSearcher}/>
          <Backdrop show={this.state.showBackdrop} hideMenu={this.hideMenu}/>
          <Nav display={this.state.menuDisplay}/>
          <div className="content">{childrenWithProps}</div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template;
