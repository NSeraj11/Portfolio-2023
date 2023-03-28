import React from 'react'
import styled from 'styled-components';
import LogoCube from '../components/Cube/Cube';

function About() {
  return (
    <MainContainer>
        <TextContainer>
            <h1>About Me</h1>
            <br />
            <p>I'm an aspiring front end developer hoping to find a job with a respectable company where I can continue to grow while also helping the company grow over time.  I am familiar with many facets of web development and am constantly working to expand my knowledge on a daily basis. I have also found that I have a passion for designing websites as well as developing them. The creative process involved in planning and then bringing that site to life is the part of being a web developer that I really enjoy</p>
            <br />
            <p>When I'm not devloping, I enjoy time with family, friends, and my dog Trunks.  I also enjoy sports, both watching and playing. A goal for the future for me is to find a space where sports and web development intersect with the hopes of finding a career in that space. </p>        
        </TextContainer>
        <LogoCube />      
    </MainContainer>
  )
}

const MainContainer = styled.div`
    display:flex;
`;

const TextContainer = styled.div`
    position:relative;
    top:300px;
    font-size:20px;
    left:100px;
    width:40rem;


    h1{
        color:white;

        @media(max-width:700px){
            position:relative;
            top:-250px;
        }
    }

    p{
        @media(max-width:700px){
            position:relative;
            top:-250px;
            width:25%;
            height:100vh;
            font-size:15px;
        }
    }

`;

export default About