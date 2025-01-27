import styled from "styled-components";

const CardButton = styled.button`
    border-radius: 20px;
    width: 200px;
    height: 220px;
    background-color:#87bf3f;
    border: none;
    box-shadow: 0px 4px 8px 0px rgba(250, 250, 250, 0.40);
    transition: 1s ease;
    cursor: pointer;
    position: relative;
    img {
        /* width: 150px;
        height: 150px; */
        width: 100%;
        height: 100%;
        border-radius: 20px;
        /* border-radius: 50%; */
        transition: 1s ease;
    }

    &:hover {
        transform: scale(0.9);
        border: solid 1px #87bf3f;
        box-shadow: 0px 4px 8px 0px #87bf3f;
        overflow: hidden;

        div{
            display: flex;
        }

        img {
            transform: scale(1.1);
        }
        
    }
`

const CardButtonInfos = styled.div`
    /* filter: blur(10px); */
    width: 100%;
    height: 50px;
    background-color: #ffffffa8;
    position: absolute;
    bottom: 0;
    border-radius:0 0 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: #000;
    }
`;

export {CardButton, CardButtonInfos}