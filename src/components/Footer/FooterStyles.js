import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 90px;
  background: #212529;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 30px auto;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px auto; 
`;
   
export const Row = styled.div`
  display: grid;
  padding-top: 7%; 
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 20px;
  text-decoration: none;
   
  &:hover {
      color: #778899;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 20px;
  font-weight: bold;
  padding-bottom: 10px
`;