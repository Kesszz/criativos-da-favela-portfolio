import styled from "styled-components";

const PortfolioContainer = styled.div`
    background-color: #4D4D4D;
    width: 100%;
    min-height: 100vh;
    padding: 50px;
    padding-top: 64px;
`;

const PortfolioTextBox = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
`;

const PortfolioTitleOne = styled.h1`
    font-size: 70px;
    color: white;
    text-align: center;
`;

const PortfolioTitleTwo = styled.h1`
    font-size: 70px;
    color: #c1ff72;
    text-align: center;
`;

const PortfolioParagraph = styled.p`
    color: white;
    font-size: 34px;
    text-align: center;
    font-family:sans-serif;

        
    b{ 
        font-weight: 400;
        color: #c1ff72;
    }
    
`;
const PortfolioCardBox = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 146px;
    flex-wrap: wrap;
`;

export {PortfolioContainer,PortfolioTextBox,PortfolioTitleOne,PortfolioTitleTwo,PortfolioParagraph, PortfolioCardBox}
