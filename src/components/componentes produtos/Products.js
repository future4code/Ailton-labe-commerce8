import React, { Component } from 'react'
import styled from 'styled-components'
import BackgroundPara from "../../Images/backgroundparalax.webp"


const Container = styled.div`
display: flex;
flex-wrap: wrap;
height: 100%;
gap: 0 12px;
justify-content: space-around;
background-image: url(${BackgroundPara});
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
gap: 3%;
height: 355px;
padding: 6px;
border-radius: 12px;
box-shadow: 4px 4px black;
background-color: #010110;
margin: 2.5% 0px;
color: white;
border: 1px solid #FF6F15;
img {
  border-radius: 12px;
  width: 240px;
  height: 230px;
}
button {
  border: 1px solid black;
  border-radius: 40px;
  padding: 2%;
  background-color: #FF6F15;
  color: white;
  transition: 0.1s;
  cursor: pointer;
  width: 150px;
  height: 30px;
}
button:hover {
  
  background-color: #F28401;
  width: 160px;
  height: 40px;
  font-size: 14px;

  
  
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