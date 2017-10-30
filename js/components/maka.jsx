import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class Maka extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  getProductsData(){
    const link = 'https://www.peruwianskiedary.pl/categories/2/products';
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
    const products = this.state.products.map(elem => {
      const product_path = `/maka/${elem.id}`;
      return (
        <div key={elem.id} className="products">
          <IndexLink to={product_path}><h2>{elem.name}<br /><p>(dowiedz się więcej)</p></h2></IndexLink>
          <div className="flip-container">
            <div className="flipper">
               <div className="product_front" style={{backgroundImage: `url(https://www.peruwianskiedary.pl${elem.imageUrl})`}}></div>
               <div className="product_back">{elem.shortDescription}</div>
             </div>
          </div>
          <a href={elem.link} target="_blank">
            <button>Przejdź do sklepu</button>
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

export default Maka;
