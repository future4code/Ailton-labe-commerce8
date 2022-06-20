import React, { Component } from "react";
import styled from "styled-components";
import BackgroundPara from "../../Images/backgroundparalax.webp";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 0 12px;
  justify-content: center;
  background-image: url(${BackgroundPara});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 12px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 32px;
  }
`;
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
  border: 1px solid #ff6f15;
  img {
    border-radius: 12px;
    width: 240px;
    height: 230px;
  }
  button {
    border: 1px solid black;
    border-radius: 40px;
    padding: 2%;
    background-color: #ff6f15;
    color: white;
    transition: 0.1s;
    cursor: pointer;
    width: 150px;
    height: 30px;
  }
  button:hover {
    background-color: #f28401;
    width: 160px;
    height: 40px;
    font-size: 14px;
  }
`;

const ContainerValueInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #010120;
  padding: 12px;
  border: 1px solid orangered;
  border-radius: 12px;
  label {
    color: white;
  }
`;

const ContainerOrderInput = styled.div`
  display: flex;
  label {
    color: white;
  }
`;

const SearchInput = styled.input`
  width: 30%;
  height: 32px;
  border-radius: 20px;
  padding: 0px 8px;
  outline: none;
  @media screen and (max-width: 800px) {
    width: 60%;
  }
`;

export default class Products extends Component {
  state = {
    inputValue: "",
    inputMinPrice: "",
    inputMaxPrice: "",
    filtering: false,
    priceFiltering: false,
  };
  onChangeInput = (event) => {
    console.log(event.target.value);
    this.setState({ inputValue: event.target.value });
  };
  onChangeMin = (event) => {
    console.log(event.target.value);
    this.setState({ inputMinPrice: event.target.value });
  };
  onChangeMax = (event) => {
    console.log(event.target.value);
    this.setState({ inputMaxPrice: event.target.value });
  };
  render() {
    if (
      this.state.inputValue ||
      this.state.inputMinPrice ||
      this.state.inputMaxPrice
    ) {
      this.state.filtering = true;
    } else {
      this.state.filtering = false;
    }

    return (
      <Container>
        <ContainerFilter>
          <ContainerValueInput>
            <label htmlFor="minvalue">Valor Minimo:</label>
            <input
              value={this.state.inputMinPrice}
              onChange={this.onChangeMin}
              type="number"
              id="minvalue"
              placeholder="Valor Minimo"
            />
            <label htmlFor="maxvalue">Valor Maximo:</label>
            <input
              value={this.state.inputMaxPrice}
              onChange={this.onChangeMax}
              type="number"
              id="maxvalue"
              placeholder="Valor Maximo"
            />
          </ContainerValueInput>
          <SearchInput
            value={this.state.inputValue}
            onChange={this.onChangeInput}
            placeholder="Buscar Produtos"
          />
          <ContainerOrderInput>
            <label htmlFor="order">Ordenação</label>
            <select id="order">
              <option>Ordem Crescente</option>
              <option>Ordem Decrescente</option>
            </select>
          </ContainerOrderInput>
        </ContainerFilter>
        {this.state.filtering
          ? this.props.productInfos
              .filter((data) => {
                return data.name.includes(this.state.inputValue);
              })
              .filter((data) => {
                return (
                  this.state.inputMinPrice === "" ||
                  data.price <= this.state.inputMinPrice
                );
              })
              .filter((data) => {
                return (
                  this.state.inputMaxPrice === "" ||
                  data.price >= this.state.inputMaxPrice
                );
              })
              .map((data) => {
                return (
                  <ProductCard key={data.id}>
                    <img src={data.img} />
                    <h4>{data.name}</h4>
                    <h5>{`R$${data.price}`}</h5>
                    <button onClick={() => this.props.addToCart(data.id)}>
                      Adicionar ao Carrinho
                    </button>
                  </ProductCard>
                );
              })
          : this.props.productInfos.map((data, index) => {
              return (
                <ProductCard key={index}>
                  <img src={data.img} />
                  <h4>{data.name}</h4>
                  <h5>{`R$${data.price}`}</h5>
                  <button onClick={() => this.props.addToCart(data.id)}>
                    Adicionar ao Carrinho
                  </button>
                </ProductCard>
              );
            })}
      </Container>
    );
  }
}
