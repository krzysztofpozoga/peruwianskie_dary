import React from 'react';
import productsData from './api.jsx';

class SuszoneZiola extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  getProductData(){
    productsData
    .then(data => {
      this.setState({
        products: data
      })
    })
  }

  componentDidMount(){
    this.getProductData();
  }
  render(){
    const products = this.state.products.map(elem => {
      return (
        <div key={elem.id} className="product">
          <h2>{elem.name}<br /><p>(dowiedz się więcej)</p></h2>
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

export default SuszoneZiola;
