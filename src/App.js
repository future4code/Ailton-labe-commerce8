import React from "react";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Products from "./components/componentes produtos/Products";
import STGun from "./Images/armastartrek.jpg";
import Yoda from "./Images/babyyoda.webp";
import SpaceCar from "./Images/carroespacial.jpg";
import Chew from "./Images/chewbacca.jpg";
import SpaceFood from "./Images/comidaespacial3.jpg";
import Comunicator from "./Images/comunicador.jfif";
import DarkSaber from "./Images/darksaber.jpg";
import Enterprise from "./Images/enterpriseproduto.webp";
import Falcon from "./Images/falcon.webp";
import Rocket from "./Images/foguete.jpg";
import SpaceRock from "./Images/rochalunar.jpeg";
import SpaceSuit from "./Images/roupanasa.jpeg";
import PurpleSaber from "./Images/sabreroxo.jfif";
import Starlink from "./Images/starlink.jpeg";
import Xwing from "./Images/xwing.jpg";



class App extends React.Component {
  state = {
    inputSearch: '',    
    searching: false,
    cartSearch: [],    
    products: [
      {
        id: 1,
        img: STGun,
        name: 'Arma Star Trek',
        price: 200,
        quantity: 0,
      },
      {
        id: 2,
        img: Yoda,
        name: 'Filhote de Yoda',
        price: 33,
        quantity: 0,
      },
      {
        id: 3,
        img: SpaceCar,
        name: 'Carro Espacial',
        price: 40,
        quantity: 0,
      },
      {
        id: 4,
        img: Chew,
        name: 'Chubaquinha',
        price: 1,
        quantity: 0,
      },
      {
        id: 5,
        img: SpaceFood,
        name: 'Comida Espacial',
        price: 12,
        quantity: 0,
      },
      {
        id: 6,
        img: Comunicator,
        name: 'Comunicador',
        price: 12,
        quantity: 0,
      },
      {
        id: 7,
        img: DarkSaber,
        name: 'Dark Saber',
        price: 12,
        quantity: 0,
      },
      {
        id: 8,
        img: Enterprise,
        name: 'Enterprise',
        price: 12,
        quantity: 0,
      },
      {
        id: 9,
        img: Falcon,
        name: 'Millenium Falcon',
        price: 12,
        quantity: 0,
      },
      {
        id: 10,
        img: Rocket,
        name: 'Foguete',
        price: 12,
        quantity: 0,
      },
      {
        id: 11,
        img: SpaceRock,
        name: 'Rocha Lunar',
        price: 12,
        quantity: 0,
      },
      {
        id: 12,
        img: SpaceSuit,
        name: 'Traje Espacial',
        price: 12,
        quantity: 0,
      },
      {
        id: 13,
        img: PurpleSaber,
        name: 'Sabre de Luz Roxo',
        price: 12,
        quantity: 0,
      },
      {
        id: 14,
        img: Starlink,
        name: 'Satélite Star Link',
        price: 12,
        quantity: 0,
      },
      {
        id: 15,
        img: Xwing,
        name: 'X-Wing',
        price: 12,
        quantity: 0,
      },
    ],
  }

  addToCart = (id) => {
    const product = this.state.products.map(data=>{
      if (data.id === id) {
        return {id: data.id, img: data.img, name: data.name, price: data.price, quantity: data.quantity+1} 
      } else {
        return data
      }
    })
    const productOnCart = this.state.cartSearch.map(data=>{
      if (data.id === id) {
        return {id: data.id, img: data.img, name: data.name, price: data.price, quantity: data.quantity+1} 
      } else {
        return data
      }
    })
    this.setState({cartSearch: productOnCart})
    this.setState({products: product})
  }

  removeFromCart = (id) => {
    // const productsState = [...this.state.products]
    const product = this.state.products.map(data=>{
      if (data.id === id && data.quantity > 0) {
      return {id: data.id, img: data.img, name: data.name, price: data.price, quantity: data.quantity-1}
      } else {
        return data
      }
    })
    const productOnCart = this.state.cartSearch.map(data=>{
      if (data.id === id && data.quantity > 0) {
      return {id: data.id, img: data.img, name: data.name, price: data.price, quantity: data.quantity-1}
      } else {
        return data
      }
    })

    this.setState({cartSearch: productOnCart})
    this.setState({products: product})
  }

  onChangeInput = (event) => {
    this.setState ({inputSearch: event.target.value})
    const newArray = this.state.products.filter(data=>{
      if(data.quantity !== 0 && data.name.toLowerCase().includes(this.state.inputSearch.toLowerCase())){
      return data
      }
    })
    this.setState({cartSearch: newArray})
  }

  render() {
    if (this.state.inputSearch) {
      this.state.searching = true
    } else {
      this.state.searching = false
    }    
    return (
      <>
        <Header
        onClickSearch={this.onClickFilter} 
        inputProps={this.state.inputSearch} 
        onChangeProps={this.onChangeInput} 
        cart={this.state.cartSearch}
        products={this.state.products} 
        removeFromCart={this.removeFromCart}
        searchingProps={this.state.searching}
        />
        <Featured productInfos={this.state.featured}/>
        <Products addToCart={this.addToCart} productInfos={this.state.products}/>
      </>
    );
  }
}
export default App;