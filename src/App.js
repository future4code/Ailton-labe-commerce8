import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const ProAndreNaoFicarCego = styled.div `
background-color: black;
height: 100vh;
width: 100%;
`

export default class App extends React.Component {
  
  
  
  render() {
    
    
    
    return (
      <ProAndreNaoFicarCego>
        <Header></Header>
      </ProAndreNaoFicarCego>
    )
  }
}


