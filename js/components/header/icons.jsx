import React from 'react';

class Icons extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="icons">
        <div className="container">
          <div className="logo">
            <img src="images/logo.png"/>
          </div>
          <div className="searchIcons">
            <div className="herbariumLink">
              <a href="https://www.peruwianskieziola.pl/DefaultHerbar" target="_blank">
                <img src="images/herbarium.png" />
                <div>ZIELNIK</div>
              </a>
            </div>
            <img id="searchIcon" src="images/search.png" onClick={this.props.showAndHideSearcher}/>
            <img id="menuIcon" src="images/menu.png" onClick={this.props.showAndHideMenu}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Icons;
