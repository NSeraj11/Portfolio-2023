import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/images/Cartoonify.png'

function Home() {
  return (
    <Container>
        <h1>Hi! I'm Nezam!</h1>
        <h2>Developer / Designer</h2>
        <img src={Logo} />
    </Container>
  )
}

const Container = styled.div`
    h1{

        position:relative;
        top:400px;
        left:150px;

        @media(max-width:700px){
            left:50px;
            top:100px;
        }
    }
    h2{
        position:relative;
        top:400px;
        left:150px;

        @media(max-width:700px){
            left:50px;
            top:100px;
        }

    }

    img{
        position:relative;
        left:400px;

        @media(max-width:700px){
            left:50px;
            height:250px;
            width:250px;
            top:100px;
        }

    }
`;

export default Home