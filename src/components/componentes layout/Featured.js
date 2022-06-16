import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  border: 1px solid black;
  padding: 4% 0px;
`;

const ContainerFeatured = styled.article`
  display: flex;
  width: 400px;
  height: 500px;
  border: 2px solid lime;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 800px) {
    
  }
`;

export default class Featured extends Component {
  render() {
    const mapProductsProps = this.props.productInfos.map((data, index) => {
      return (
        <ContainerFeatured key={index}>
          <img src={data.img} />
        </ContainerFeatured>
      );
    });
    return(
        <Container>
            {mapProductsProps}
        </Container>     
        ) 
    }
}
