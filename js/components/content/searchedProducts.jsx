import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";
import Spinner from './spinner.jsx';

class SearchedProducts extends React.Component {
  constructor(props){
    super(props);
    console.log(this);
    this.state = {
      products: [],
      loading: false
    }
  }

  getProductsData(){
    this.setState({loading: true});
    if (this.props.link != '') {
      const link = `https://www.peruwianskiedary.pl/categories/products/search?phrase=${this.props.link}`;
      fetch(link)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          products: data,
          loading: false
        })
      })
    }
  }

  componentDidMount(){
    this.getProductsData();
  }

  componentDidUpdate(){
    this.getProductsData();
  }

  componentWillUnmount(){
    this.getProductsData();
  }

  render(){
    if (window.innerWidth >= 768) {
      app.style.backgroundImage	=	"url(images/Fotolia_69824599_L.jpg)";
    }
    let products = this.state.products.map(elem => {
      const product_path = `/search/${elem.id}`;
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
    });
    if(this.state.loading) {
      products = <Spinner />
    }
    return (
      <div className="listOfProducts">
        <div className="container">{products}</div>
      </div>
    )
  }
}

export default SearchedProducts;
