import styled from "styled-components";

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    display: flex;
    align-items: center;

    @media (max-height: 600px) {
        height: auto;
        min-height: 100vh;
        padding-bottom: 100px;
    }
    @media (max-width: 700px) {
        flex-direction: column;
        min-height: 100vh;
        height: auto;
    }

   
`;

const HomeBackground = styled.div`
    width: 33% ;
    height: 98%;
    background-image: url('/assets/homebg.jpg');
    background-repeat: no-repeat;
    background-position: none 50%;
    flex: 0 0 auto;
    background-size: cover;

    @media (max-height: 600px) {
      height: 100vh;
      
    }

    @media (max-width: 700px) {
        width: 100vw;
        background-size: contain;
        height: 70vh;
        background-position: center center;
    }
`;

const HomeContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 40PX;
    position: relative;

    @media (max-width: 700px) {
      width: 90%;
    }
   

`;

const HomeTitleContainer = styled.div`
    background-color: #31523E;
    width: 70%;
    padding: 16px 36px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    span {
        display: flex;
        gap:4px; 
    }

    @media (max-width: 700px) {
      width: 90%;
    }
   
`;

const HomeTitle = styled.h1`
    font-size:  32px;
    color: white;

    b{ 
    
        color: #c1ff72;
    }

    @media (max-width: 1366px) {
       font-size: 26px;
    }

    @media (max-height: 800px) {
        font-size: 30px;
    }

    @media (max-width: 700px) {
       font-size: 24px;
    }
`;



const HomeFrame = styled.iframe`
    border-radius: 18px;
    min-width: 450px;
    min-height: 250px;
    width: 70%;
    height: 40%;
    margin-bottom: 5%;

   

    @media (max-width: 700px) {
       width: 300px;
       min-width: unset;
       min-height: unset;
       height: 200px;
    }
`;

const HomeProjetContainer = styled.div`
width: 70%;
     @media (max-width: 700px) {
       width: 90%;
    }
`;

const HomeProjetcTitle = styled.h2`
    font-size: 50px;
    color: #c1ff72;
    text-align: center;

    @media (max-width: 1366px) {
       font-size: 26px;
    }

    
    @media (max-height: 800px) {
        font-size: 44px;
    }

    @media (max-width: 700px) {
       font-size: 30px;
    }

`;

const HomeProjectParagraph = styled.p`
    font-size: 16px;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    b{ 
        font-weight: 400;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: #c1ff72;
    }

    @media (max-width: 1366px) {
       font-size: 12px;
    }

    @media (max-height: 800px) {
        font-size: 14px;
    }

    @media (max-width: 700px) {
       font-size: 10px;
    }
`;

const HomeProjectKnowBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 150px;

    @media (max-height: 600px) {
        position: static;
        float: right;
    }
    
    @media (max-width: 700px) {
       
       position: static;
    }
`;

const HomeProjectKnowBoxText = styled.p`
     color: #c1ff72;
     font-size: 70px;

     @media (max-width: 1366px) {
       font-size: 30px;
    }

    @media (max-height: 800px) {
        font-size: 60px;
    }
     @media (max-width: 700px) {
       margin-top: 24px;
       font-size: 40px;
       margin-bottom: 40px;
    }
`;

export {HomeContainer, HomeBackground, HomeContent, HomeTitleContainer, HomeTitle, HomeFrame, HomeProjetContainer, HomeProjetcTitle, HomeProjectParagraph, HomeProjectKnowBox, HomeProjectKnowBoxText}