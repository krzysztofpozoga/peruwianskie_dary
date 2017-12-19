import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.jsx';
import Icons from './icons.jsx';
import Nav from './nav.jsx';
import Backdrop from './backdrop.jsx';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuDisplay: '',
      searcherDisplay: '',
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
  render(){
    return (
      <div>
        <Header display={this.state.searcherDisplay} getText={this.props.getText}/>
        <Icons showMenu={this.showMenu} showAndHideSearcher={this.showAndHideSearcher}/>
        <Backdrop show={this.state.showBackdrop} hideMenu={this.hideMenu}/>
        <Nav display={this.state.menuDisplay}/>
      </div>
    )
  }
}

export default Navigation;
