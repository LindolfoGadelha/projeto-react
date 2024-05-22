import styled from "styled-components";


import background from "../../assets/background.svg";



export const Conteiner = styled.div`
  background: url("${background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100%;
  min-height: 100vh;
 
`;

export const Image = styled.img`
  margin-top: 30px;
`;
export const ConteinerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  backdrop-filter: blur(45px);
  padding: 50px 36px;
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: calc(100vh -170px);
`;




export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 120px;
  background: transparent;
  border: 1px solid #ffffff;
  color: aliceblue;
  font-size: 22px;
  font-weight: bold;
  line-height: 28px;
  font-style: normal;
  cursor: pointer;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  &:hover {
    opacity: 0.8;
    background-color: aliceblue;
    color: black;
  }
  &:active {
    opacity: 0.5;
  }
  img{
    transform: rotateY(180deg);
  }
`;
export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  width: 342px;
  height: 48px;
  outline: none;
  border: none;

 

  p{
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
  }
  button{
    background: none;
    border: none;
    cursor: pointer;
  }

`;
