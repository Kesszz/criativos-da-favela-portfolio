import styled from "styled-components";

const InfoModalContainer = styled.div`
  background-color: #000000ba;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* visibility: hidden; */
  /* opacity: 0; */
  z-index: 20;
`;

const InfoCardContainer = styled.div`
  background-color: #c1ff72;
  width: 600px;
  height: 800px;
  border-radius: 20px;
  padding: 24px;
  max-height: 90vh;
  position: relative;
  overflow: auto;
  box-shadow: 0px 2px 15px 0px #FFF;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

const InfoCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 700px) {
      flex-direction: column;
    }

  img {
    width: 240px;
    height: 240px;
    border-radius: 50%;

    @media (max-width: 700px) {
      
    }
  }

  p {
    color: #1a4b2d;
    font-size: 60px;

    @media (max-width: 700px) {
      font-size: 40px;
    }
  }
`;

const InfoCardBody = styled.div`
  padding: 40px;
  h2 {
    color: #1a4b2d;
    font-size: 60px;

    @media (max-width: 700px) {
      font-size: 40px;
    }
  }
`;

const InfoCardTags = styled.p`
  font-size: 46px;
  text-transform: uppercase;

  @media (max-width: 700px) {
      font-size: 26px;
    }
`;

const InfoCardLink = styled.a`
  font-size: 46px;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 500px;
  overflow: hidden;
  display: inline-block;
  color: inherit;

  @media (max-width: 700px) {
      font-size: 26px;
      width: 250px;
    }
`;

const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  img {
    width: 20px;
  }
`;

export {
  InfoModalContainer,
  InfoCardContainer,
  InfoCardHeader,
  InfoCardBody,
  InfoCardTags,
  InfoCardLink,
  CloseBtn,
};
