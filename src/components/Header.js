import React from "react";
import styled from "styled-components";
import Logo from "../Images/logooficialloja.png"
import CartLogo from "../Images/carrin.png"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #010020;
  color: white;
  padding: 0px 12px;
  position: sticky;
  top: 0;
  user-select: none;
  /* border-bottom: 0.5px white solid; */
`;
const CartClick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: black;
  border: 1px solid black;
  border-radius: 12px;
  padding: 4px;
  background-color: white;
  transition: 0.1s;
  :hover {
  cursor: pointer;
  background-color: #F28B44;
  }
  img {
    width: 15px;
    height: 15px;
  }
  p{
    /* background-color: pink; */
    padding-bottom:2.4px;
  }
`
const Options = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  width: fit-content;
  height: 100%;
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
  /* flex-direction: column; */
  /* border:1px solid black; */
  border-bottom: 1px solid darkgray;
  margin: 4px;
  width: 90%;
  padding: 2%;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

const ImageLogo = styled.img `
width: 50px;
height: 50px;
`
const MiniCartContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
padding: 12px 0;
`
const ContainerTextCart = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
input{
  padding: 3px;
  border-radius:5px;
  border: 1px solid black;
}
`
const TotalPrice = styled.i `
margin-bottom: 20px;
font-weight: bold;
`

const MiniCartP = styled.div `

/* background-color: purple; */
display: flex;
gap:10px;
flex-direction: column;
width: 250px;
height: 100%;
justify-content: center;
align-items: center;
p {
  text-align: center;
}
`
const ButtonCart = styled.button `
padding: 5px 10px;
font-size: large;
border-radius: 100%;
color: white;
border: 1px solid black;
background-color: red;
cursor: pointer;
transition: 0.1s;
:hover {
  background-color: #FF5555;
}
`

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
          <ImageLogo src={Logo}/>
          <p>Produtos</p>
          <p>Teste</p>
        </Options>
        <CartClick onClick={this.openCart}><img src={CartLogo} /><p>Carrinho</p></CartClick>
        {this.state.cart &&
         <Cart>
          <ContainerTextCart>
          <input placeholder="Buscar no carrinho" value={this.props.inputProps} onChange={this.props.onChangeProps}/>
            <h4>{`Quantidade de items: ${sum}`}</h4>
            
          
          </ContainerTextCart>
          <MiniCartContainer>
          {this.props.searchingProps ? this.props.cart.filter(data=>{return data.quantity > 0}).map(data=>{
            return (
            <MiniCart key={data.id}>
              <img src={data.img}/>
              <MiniCartP><h4>{`${data.name} `}</h4><p>{`Qtd: ${data.quantity}, Preço: R$${data.price}`}</p></MiniCartP>
              <ButtonCart onClick={()=>this.props.removeFromCart(data.id)}>x</ButtonCart>
            </MiniCart>
            )
            
          }):
          this.props.products.filter(data=>{return data.quantity > 0}).map(data=>{
            return (
              <MiniCart key={data.id}>
              <img src={data.img}/>
              <MiniCartP><h4>{`${data.name} `}</h4><p>{`Qtd: ${data.quantity}, Preço: R$${data.price}`}</p></MiniCartP>
              <ButtonCart onClick={()=>this.props.removeFromCart(data.id)}>x</ButtonCart>
            </MiniCart>
            )
          })}
          </MiniCartContainer>
          <TotalPrice>{`Valor total do carrinho: ${sumPrice} Mérreis`}</TotalPrice>
          </Cart>
          }
      </StyledHeader>
    );
  }
}