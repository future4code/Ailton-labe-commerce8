import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #010020;
  color: white;
  padding: 0px 12px;
  position: fixed;
  top: 0;
  user-select: none;
`;
const CartClick = styled.p`
  color: black;
  border: 1px solid black;
  border-radius: 12px;
  padding: 4px;
  background-color: white;
  :hover {
  cursor: pointer;
  }
`
const Options = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  width: fit-content;
  height: 100%;
  border: 1px solid pink;
  color: black;
  padding: 0px 2px;
  background-color: #c84d00;
`;

const Cart = styled.div`
  position: fixed;
  background-color: white;
  width: 400px;
  height: 90%;
  border: 1px solid black;
  top: 59px;
  right: 8px;
  color: black;
`;



export default class Header extends React.Component {
  state = {
    cart: false,
  }
  openCart = () => {
    this.setState({cart: !this.state.cart})
  }
  render() {
    return (
      <StyledHeader>
        <Options>
          <p>Logo</p>
          <p>Produtos</p>
          <p>Teste</p>
        </Options>
        <CartClick onClick={this.openCart}>Carrinho</CartClick>
        {this.state.cart && <Cart>
          <input/>
          <button>Sexo</button>
          <p>Garrafa</p>
          </Cart>}
      </StyledHeader>
    );
  }
}
