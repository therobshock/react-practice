import React, { Component } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import products from '../data/products';
import './home.css';

class Home extends Component {
  state = {
    products
  }

  render() {
    return (
      <div>
        <Banner>
          Home
        </Banner>
        <div className="container">
          <h1>Products</h1>
          <div className="products">
          {this.state.products.map(product => (
            <Card
              key={product.key}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
          </div>
        </div>
      </div>
    )
  }
};

export default Home;