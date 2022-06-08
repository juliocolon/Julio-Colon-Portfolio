
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
   
      <Container>
           <h2 style={{ color: "#FFFFFF", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
      <a href="#top" style={{color:"#FFFFFF", textDecoration: 'none'}}>Get In Touch</a>
      </h2>
        <Row>
          <Column>
            <Heading><FooterLink href="https://github.com/juliocolon" target="_blank"><img src="/GitHub-Mark-Light-64px.png" alt="logo" /></FooterLink></Heading>
          </Column>
          <Column>
            <Heading><FooterLink href="https://www.linkedin.com/in/julio-c-colon/" target="_blank"><img src="/linkedin.png" alt="logo" /></FooterLink></Heading>
          </Column>
          <Column>
            <Heading><FooterLink href="https://twitter.com/JCCologne" target="_blank"><img src="/twitter.png" alt="logo" /></FooterLink></Heading>
          </Column>
          <Column>
            <Heading id="footer"> <FooterLink href="mailto: jcolon1092@gmail.com"><img src="/email.png" alt="logo" /> </FooterLink></Heading>
        
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
