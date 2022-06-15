import React, { Component } from 'react'
import styled from 'styled-components'
const Container = styled.div`
display: flex;
flex-wrap: wrap;
height: 100%;
background-color: darkgray;
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
border: 1px solid black;
background-color: orange;
img {
  width: 100%;
  height: 90%;
}
`

export default class Products extends Component {
  render() {
    const mapProductsProps = this.props.productInfos.map((data, index) => {
      return (
        <ProductCard key={index}>
          <img src={data.img} />
          <h4>{data.name}</h4>
          <h5>{data.price}</h5>
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
