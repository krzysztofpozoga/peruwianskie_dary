import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="facebookLike">
              <button>Lubię to!</button>
            </div>
          </div>
          <div className="row">
            <div className="searcher">
              <form className="search">
                <input type="text" placeholder="  Wyszukaj na stronie..." />
                <input type="submit" value="Szukaj" onClick={this.props.searchProduct}/>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
