import React from 'react';
import Spinner from './spinner.jsx';

class EachProduct extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: [],
      loading: false
    }
  }

  getProductInfo(){
    this.setState({loading: true});
    const productLink = `https://www.peruwianskiedary.pl/categories/products/${this.props.params.id}`;
    fetch(productLink)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        product: data,
        loading: false
      })
    })
  }

  componentDidMount(){
    this.getProductInfo();
  }

  render(){
    let app = document.getElementById('app');
    if (window.innerWidth >= 768) {
      app.style.backgroundImage	=	"url(images/Fotolia_69824599_L.jpg)";
    }
    let eachProduct = (
      <div className="product">
        <h1>{this.state.product.name}</h1>
        <div className="imageDescription">
          <div className="productImage" style={{backgroundImage: `url(https://www.peruwianskiedary.pl${this.state.product.imageUrl})`}}></div>
          <div className="productDescription">
            <h2>OPIS</h2>
            <div>{this.state.product.description}</div>
          </div>
        </div>
        <div className="ingredients">
          <h3>Składniki</h3>
          <div>{this.state.product.ingredients}</div>
        </div>
        <div className="preparation">
          <h3>Sposób przygotowania</h3>
          <div>{this.state.product.preparation}</div>
        </div>
        <div className="comentary">
          <h3>Krótki komentarz</h3>
          <div>{this.state.product.comments !== null ? this.state.product.comments : 'Brak komentarza'}
          </div>
        </div>
        <a href={this.state.product.link} target="_blank">
          <button>Kup teraz</button>
        </a>
      </div>
    );
    if(this.state.loading) {
      eachProduct = <Spinner />
    }
    return (
      <section className="eachProduct">
        <div className="container">{eachProduct}</div>
      </section>
    )
  }
}

export default EachProduct;
