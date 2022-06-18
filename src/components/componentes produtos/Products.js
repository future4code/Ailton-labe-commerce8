import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
flex-wrap: wrap;
height: 100%;
justify-content: space-around;
background-image: url(https://images.unsplash.com/photo-1559657693-e816ff3bd9af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
const ContainerFilter = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 60px;
background-color: black;
`
const ProductCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 250px;
height: 300px;
padding: 8px;
border-radius: 12px;
box-shadow: 4px 4px darkgray;
background-color: azure;
margin: 4% 0px;
img {
  width: 100%;
  height: 80%;
}
`

export default class Products extends Component {
  render() {
    const mapProductsProps = this.props.productInfos.map((data, index) => {
      return (
        <ProductCard key={index}>
          <img src={data.img} />
          <h4>{data.name}</h4>
          <h5>{`R$${data.price}`}</h5>
          <button onClick={()=>this.props.addToCart(data.id)}>Adicionar ao Carrinho</button>
        </ProductCard>
      );
    });
    return (
      <Container>
        <ContainerFilter>
        <input placeholder='Buscar Produtos'/>
        <button>Buscar</button>
        </ContainerFilter>
        {mapProductsProps}
      </Container>
    )
  }
}