import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 90vh;
  min-height: fit-content;
  /* background-image: url(https://images.unsplash.com/photo-1559657693-e816ff3bd9af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */
  border: 1px solid black;

`;

const ContainerFeatured = styled.article`
  display: flex;
  width: 20%;
  height: 50%;
  border: 2px solid lime;
  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 1368px) {
    width: 50%;
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
