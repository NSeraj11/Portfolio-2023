import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MealZ from '../assets/images/projects/MealZ.png'
import Petstop from '../assets/images/projects/Petstop.png'
import BudgetApp from '../assets/images/projects/BudgetApp.png'
import Continental from '../assets/images/projects/Continental.png'



function Portfolio() {
  return (
    <div>
        <Container>
            <Box className="box">
              <div className='row-1'>
                <Link to="https://nseraj11.github.io/MealZ/">
                  <span><img src={MealZ}/></span>
                </Link>
                <Link to="https://nseraj11.github.io/TheContinental2/#/">
                  <span><img src={Continental}/></span>
                </Link>
              </div>
              <div className='row-2'>
                <Link to="https://nseraj11.github.io/BudgetApp/">
                  <span><img src={BudgetApp}/></span>
                </Link>
                <Link to="https://nseraj11.github.io/PetStop/">
                  <span><img src={Petstop}/></span>
                </Link>
              </div>
            </Box>
        </Container>
    </div>
  )
}

const Container = styled.div`
    
    width:1350px;
    position:relative;
    left:45px;
    top:45px;
`;

const Box = styled.div`
  
    .row-1{
      display:flex;
      @media(max-width:700px){
        flex-direction:column;
      }
    }
    img{
      height:300px;
      width:400px;
      position:relative;
      border: 1px solid black;
      margin:15px;

      @media(max-width:700px){
        height:120px;
        width:120px;
      }
    }
`;

export default Portfolio