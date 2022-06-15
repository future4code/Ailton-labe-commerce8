import React from "react";
import Header from "./components/componentes layout/Header";
import Featured from "./components/componentes layout/Featured";
import Products from "./components/componentes layout/componentes produtos/Products";

class App extends React.Component {
  state = {
    products: [
      {
        id: Date.now(),
        img: 'https://picsum.photos/id/237/200/400',
        name: 'Dog Fodastico',
        price: '5 Mérreis',
      }
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
    ]
  }

  render() {
    return (
      <>
        <Header/>
        <Featured productInfos={this.state.featured}/>
        <Products productInfos={this.state.products}/>
      </>
    );
  }
}

export default App;
