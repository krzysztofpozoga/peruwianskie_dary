import React from 'react';
import Header from './header.jsx';
import Icons from './icons.jsx';
import Nav from './nav.jsx';
import Footer from './footer.jsx';
import MainPage from './mainPage.jsx';
import SuszoneZiola from './suszoneZiola.jsx';
import Maka from './maka.jsx';
import Ekstrakty from './ekstrakty.jsx';
import SuperFoods from './superfoods.jsx';
import SearchedProducts from './searchedProducts.jsx';
import AboutShop from './aboutShop.jsx';
import Contact from './contact.jsx';
import NotFound from './notFound.jsx';

class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuDisplay: '',
      searcherDisplay: '',
      searchText: ''
    }
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

  getText = (event) => {
      this.setState({
          searchText: event.target.value
      })
  }

  searchProduct = (event) => {
    event.preventDefault();  
    let searchedText = this.state.searchText;
    console.log(searchedText);
  }

  render(){
    return (
      <div>
        <div id="all">
          <Header display={this.state.searcherDisplay} getText={this.getText} searchProduct={this.searchProduct}/>
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
