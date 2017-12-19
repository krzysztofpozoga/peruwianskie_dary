import React from 'react';

import Navigation from './header/navigation.jsx';
import Footer from './footer/footer.jsx';
import MainPage from './content/mainPage.jsx';
import SuszoneZiola from './content/suszoneZiola.jsx';
import Maka from './content/maka.jsx';
import Ekstrakty from './content/ekstrakty.jsx';
import SuperFoods from './content/superfoods.jsx';
import AboutShop from './content/aboutShop.jsx';
import Contact from './content/contact.jsx';
import NotFound from './content/notFound.jsx';


class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      link: '',
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
          <Navigation getText={this.getText}/>
          <div className="content">{childrenWithProps}</div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template;
