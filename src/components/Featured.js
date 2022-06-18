import React, { Component } from "react";
import styled from "styled-components";
import Nasa from "../Images/nasa2.jpg";
import Tesla from "../Images/tesla2full.jfif";
import StarWars from "../Images/deathstar.jpg";
import StarTrek from "../Images/enterprise.jpg";
import SWLogo from "../Images/swpnglogo.png";
import STLogo from "../Images/startreklogo.png";
import NasaLogo from "../Images/nasaologooficial2.png";
import SpaceLogo from "../Images/spacexlogocerto.png";



const Container = styled.section`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  /* gap: 12px; */
  width: 100%;
  height: 600px;
  /* min-height: 700px; */
  flex-wrap: wrap;
  /* border: 1px solid black; */
  /* padding-top: 3.95%; */
  @media screen and (max-width: 800px){
    height: 100%;
  }

`;

// const ContainerFeatured = styled.article`
//   display: flex;
//   width: 100%;
//   /* height: 500px; */
//   border: 1px solid black;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `;

const ContainerImagens1 = styled.div `
  background-image: url(${Nasa});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 25%;
  height: 100%;
  border: 1px solid darkgray;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2%;
  @media screen and (max-width: 800px){
    width: 100%;
    height: 50%;
    min-height: 300px;
  }
`
const ContainerImagens2 = styled.div `
  background-image: url(${Tesla});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 25%;
  height: 100%;
  border: 1px solid darkgray;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 800px){
    width: 100%;
    height: 50%;
    min-height: 300px;
  }
`
const ContainerImagens3 = styled.div `
  background-image: url(${StarWars});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 25%;
  height: 100%;
  border: 1px solid darkgray;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2%;
  @media screen and (max-width: 400px){
    width: 100%;
    height: 50%;
    min-height: 300px;
  }
`
const ContainerImagens4 = styled.div `
  background-image: url(${StarTrek});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 25%;
  height: 100%;
  border: 1px solid darkgray;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2%;
  @media screen and (max-width: 800px){
    width: 100%;
    height: 50%;
    min-height: 300px;
  }
`
const LogoSW = styled.img `
 height: 80px;
 width: 160px;
`
const LogoST = styled.img `
 height: 100px;
 width: 200px;
`
const LogoSpace = styled.img `
 height: 150px;
 width: 275px;
`
const LogoNasa = styled.img `
 height: 100px;
 width: 180px;
`

export default class Featured extends Component {
  render() {
      
    return(
        <Container>
          
            
          <ContainerImagens1>
            <LogoNasa src={NasaLogo} />
          </ContainerImagens1>
          <ContainerImagens2>
            <LogoSpace src={SpaceLogo} />
          </ContainerImagens2>
          <ContainerImagens3>
            <LogoSW src={SWLogo} />
          </ContainerImagens3>
          <ContainerImagens4>
            <LogoST src={STLogo} />
          </ContainerImagens4>

        </Container>     
        ) 
    }
}
