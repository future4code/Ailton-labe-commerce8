import React from "react";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Products from "./components/componentes produtos/Products";


class App extends React.Component {
  state = {
    inputSearch: '',    
    searching: false,
    cartSearch: [],    
    products: [
      {
        id: 1,
        img: 'https://picsum.photos/id/237/200/400',
        name: 'Dog 1',
        price: 200,
        quantity: 0,
      },
      {
        id: 2,
        img: 'https://picsum.photos/id/237/200/400',
        name: 'Dog 2',
        price: 33,
        quantity: 0,
      },
      {
        id: 3,
        img: 'https://picsum.photos/id/237/200/400',
        name: 'Dog 3',
        price: 40,
        quantity: 0,
      },
      {
        id: 4,
        img: 'https://picsum.photos/id/237/200/400',
        name: 'Gatorade',
        price: 1,
        quantity: 0,
      },
      {
        id: 5,
        img: 'https://picsum.photos/id/237/200/400',
        name: 'Josefino',
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

  // onClickFilter = () => {
  //   const newArray = this.state.products.filter(data=>{
  //     if(data.quantity !== 0 && data.name.toLowerCase().includes(this.state.inputSearch.toLowerCase())){
  //     return data
  //     }
  //   })
  //   console.log(newArray)
  //   this.setState({cartSearch: newArray, searching: !this.state.searching})
  // }

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