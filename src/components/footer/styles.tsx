import styled from "styled-components";

const FooterContainer = styled.footer`
    padding: 0 24px;
    height: 95px;
    display: flex;
    justify-content: center;

    img {
       
    }

    `
   

const FooterLogos = styled.img`
     height: 200px;

     @media (max-width: 700px) {
        height: 300px;
        width: 100%;
    }
`;



export {FooterContainer, FooterLogos}