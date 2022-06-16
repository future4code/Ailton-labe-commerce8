import React from "react";
import Header from "./components/componentes layout/Header";
import Featured from "./components/componentes layout/Featured";
import Products from "./components/componentes layout/componentes produtos/Products";

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        img: 'https://picsum.photos/id/237/200/400',
        name: 'Dog 1',
        price: '5 Mérreis',
        quantity: 1,
      },
      {
        id: 2,
        img: 'https://picsum.photos/id/237/200/400',
        name: 'Dog 2',
        price: '5 Mérreis',
        quantity: 1,
      },
    ],
    featured: [
      {
        img: 'https://picsum.photos/id/237/1000/2000',
        name: 'Labrador Fodastico',
      },
      {
        img: 'https://picsum.photos/id/237/1000/1000',
        name: 'Labrador Mto pica',
      },
      {
        img: 'https://picsum.photos/id/237/1000/1000',
        name: 'Labrador Fodastico',
      },
      {
        img: 'https://picsum.photos/id/237/1000/1000',
        name: 'Labrador Mto pica',
      }
    ],
    cart: [
      {
        id: 23,
        img: 'https://picsum.photos/id/237/200/400',
        name: 'Dog Fodastico',
        price: '5 Mérreis',
      },
    ]
  }

  addToCart = (id) => {
    const copyCart = [...this.state.cart]    
    const product = this.state.products.filter(data=>{
      return data.id === id
    })
    copyCart.push(product[0])
    this.setState({cart: copyCart})
  }

  removeFromCart = (id) => {
    // const copyCart = [...this.state.cart]
    const product = this.state.cart.filter(data=>{
      return data.id !== id
    })
    this.setState({cart: product})
  }

  render() {
    return (
      <>
        <Header cart={this.state.cart} removeFromCart={this.removeFromCart}/>
        <Featured productInfos={this.state.featured}/>
        <Products addToCart={this.addToCart} productInfos={this.state.products}/>
      </>
    );
  }
}

export default App;
