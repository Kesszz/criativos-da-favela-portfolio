import styled from "styled-components";

const AreasContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: 0;
   

    @media (max-width: 1200px) {
        flex-direction: column;
        min-height: 100vh;
        height: auto;
    }
`;

const AreasHeader = styled.div`
    
    width: 100%;
    height: 50%;
    background-image: url('/assets/section2bg.jpg');
    background-size:100%;
    background-repeat: no-repeat;
    background-position: 100% 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 1;
    

`;

const AreasImg = styled.img`
    width: 50%;
`;

const AreasContent = styled.div`
    /* background-color: #5e5e5e; */
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
`;

const AreasCardCotainer = styled.a`

     background-color: rgb(250, 250, 250); /* Fallback color */
  background-color: rgba(250,250,250, 0.2); /* Black w/opacity/see-through */
     backdrop-filter: blur(10px);
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
    width: 400px;
     border-radius: 8px;
     row-gap: 10px;
     cursor: pointer;
     text-decoration: none;
   

&:hover {
    background-color: rgba(250,250,250, 0.7);
     }

    p {
        color: white;
    }
`;


const AreasCard = styled.div`
    border-radius: 16px;
    background-color: #c1ff72;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
//-webkit-filter: blur(8px);
    img {
        width: 60px;
        height: 60px;
    }
`;

export {AreasContainer, AreasHeader, AreasImg, AreasContent, AreasCard, AreasCardCotainer}