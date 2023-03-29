import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

function ContactMe() {

const form = useRef();

const sendEmail = (e) => {
  

  emailjs.sendForm('service_l8gt0pa', 'template_2p6ob6f', form.current, '34uT-EcuAvUdIaDar')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
  return (
  <ContactForm>
    <h1>Contact Me</h1> 
    <form ref={form} onSubmit={sendEmail}>
    
      <input className="name-input" placeholder='John Smith' type="text" name="user_name" />
      <input placeholder='JSmith21@email.com' className="email-input" type="email" name="user_email" />
      <textarea placeholder="Hey Nezam! I'd like to hire you" className="message-input" name="message" />
      <input className="btn" type="submit" value="Send" />
    </form>
  </ContactForm>
  )
}

const ContactForm = styled.div`
    
    position:relative;
    top:200px;
    left:200px;
    
  h1{
    font-size:3rem;
    color:white;
    position:relative;
    top:55px;
    left:-10px;

    @media(max-width:700px){
      left:-180px;
      top:-140px;
    }
  }

  input{
    padding:0;
    margin:0;
  }

  input.name-input{
    height:10px;
    position:relative;
    top:85px;
    width:300px;
    @media(max-width:700px){
      left:-180px;
      top:-140px;
      width:150px;
    }
  }

  input.email-input{
    height:10px;
    position:relative;
    top:85px;
    left:-2px;
    width:300px;
    margin-left:2px;

    @media(max-width:700px){
      left:-185px;
      top:-140px;
      width:150px;
    }
  }

  
input.btn{
  position:relative;
  height:50px;
  width:600px;
  top:80px;
  left:0px;
  background-color:black;
  color:white;
  font-size:30px;

  @media(max-width:700px){
    top:-145px;
    left:-180px;
    width:300px;
  }
}

  textarea.message-input{
    height:100px;
    width:600px;
    position:relative;
    top:85px;

    @media(max-width:700px){
      left:-180px;
      top:-140px;
      width:300px;
    }
    
  }

  

  input:placeholder{
    padding:0;
  }

  input::placeholder{
    font: 1.7em sans-serif;
    line-height:12;

    @media(max-width:700px){
      font:0.9em sans-serif;
    }
  }

  textarea::placeholder{
    font: 30px sans-serif;

    @media(max-width:700px){
      font:20px sans-serif;
    }
  }
`;

export default ContactMe
