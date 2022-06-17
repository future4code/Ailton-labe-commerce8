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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 400px;
  height: fit-content;
  max-height: 95%;
  border: 1px solid black;
  top: 59px;
  right: 8px;
  color: black;
  overflow: auto;
  padding: 12px;
  border-radius: 12px;
`;

const MiniCart = styled.div`
  display: flex;
  align-items: center;
  border:1px solid black;
  margin: 4px;
  width: 90%;
  img {
    width: 50px;
    height: 50px;
  }
`;

export default class Header extends React.Component {
  state = {
    cart: false,
  }
  openCart = () => {
    this.setState({cart: !this.state.cart})
  }
  render() {
    const quantity = this.props.products.filter(data=>{return data.quantity > 0}).map(data=>{
      return data.quantity
    })    
    let sum = 0;
    for (let i = 0; i < quantity.length; i++) {
    sum += quantity[i];
    }

    const price = this.props.products.filter(data=>{return data.quantity > 0}).map(data=>{
      return data.price*data.quantity
    })
    let sumPrice = 0;
    for (let i = 0; i < price.length; i++) {
    sumPrice += price[i];
    }

    return (
      <StyledHeader>
        <Options>
          <p>Logo</p>
          <p>Produtos</p>
          <p>Teste</p>
        </Options>
        <CartClick onClick={this.openCart}>Carrinho</CartClick>
        {this.state.cart &&
         <Cart>
          <div>
            <p>{`Quantidade de items: ${sum}`}</p>
            <p>{`Valor total do carrinho: ${sumPrice} Mérreis`}</p>
          <input placeholder="Buscar no carrinho" value={this.props.inputProps} onChange={this.props.onChangeProps}/>
          </div>
          {this.props.searchingProps ? this.props.cart.filter(data=>{return data.quantity > 0}).map(data=>{
            return (
            <MiniCart key={data.id}>
              <img src={data.img}/>
              <p>{`${data.name} R$${data.price} Quantidade: ${data.quantity}`}</p>
              <button onClick={()=>this.props.removeFromCart(data.id)}>Remover</button>
            </MiniCart>
            )
          }):
          this.props.products.filter(data=>{return data.quantity > 0}).map(data=>{
            return (
              <MiniCart key={data.id}>
              <img src={data.img}/>
              <p>{`${data.name} R$${data.price} Quantidade: ${data.quantity}`}</p>
              <button onClick={()=>this.props.removeFromCart(data.id)}>Remover</button>
            </MiniCart>
            )
          })}
          </Cart>
          }
      </StyledHeader>
    );
  }
}