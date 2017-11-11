import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class SuperFoods extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  getProductsData(){
    const link = 'https://www.peruwianskiedary.pl/categories/4/products';
    fetch(link)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        products: data
      })
    })
  }

  componentDidMount(){
    this.getProductsData();
  }
  render(){
    let app = document.getElementById('app');
    app.style.backgroundImage	=	"url(images/backgroundTra.jpg)";
    const products = this.state.products.map(elem => {
      const product_path = `/superfoods/${elem.id}`;
      return (
        <div key={elem.id} className="products">
          <IndexLink to={product_path}>
            <h2>{elem.name}<br /><p>(kliknij i dowiedz się więcej)</p></h2>
            <div className="flip-container">
              <div className="flipper">
                 <div className="product_front" style={{backgroundImage: `url(https://www.peruwianskiedary.pl${elem.imageUrl})`}}></div>
                 <div className="product_back">{elem.shortDescription}</div>
               </div>
            </div>
          </IndexLink>
          <a href={elem.link} target="_blank">
            <button>Kup teraz</button>
          </a>
        </div>
      )
    })
    return (
      <div className="listOfProducts">
        <div className="container">{products}</div>
      </div>
    )
  }
}

export default SuperFoods;
