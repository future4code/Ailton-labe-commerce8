import React from "react";
import styled from "styled-components";



const Container = styled.div ` 
width: 100vw;
height: 100px;
display: flex;
background-color: green;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;

`
const ContainerMenu = styled.div `
display: flex;
width: 200px;
padding: 0 2%;
border: 1px solid;
justify-content: space-between;
margin-left: 3%;
align-items: center;
`
const TextoCarrinho = styled.div `
display: flex;
justify-content: center;
align-items: center;
min-width: 100px ;
height: 20%;
margin-right: 3%;
background-color: white;
padding: 0.5%;
border-radius: 10px;
cursor: pointer;

`
const AbaCarrinho = styled.div `
width: 300px;
height: 800px;
top: 100 px;
right: 0;
background-color: white;
position: fixed;
`


export default class Header extends React.Component {
  
state = {
    abreCarrinho: false
}

 mostraCarrinho = () => {
    this.setState({abreCarrinho: !this.state.abreCarrinho})
 
 } 

  render() {
   
    
    return (
      <Container>
        <ContainerMenu>
            <p>Logo</p>
            <p>Produtos</p>
            <p>Teste</p>
        </ContainerMenu>
        <TextoCarrinho onClick={this.mostraCarrinho}>Carrinho</TextoCarrinho>
        {this.state.abreCarrinho && <AbaCarrinho></AbaCarrinho>}

      </Container>
    )
  }
}

  
