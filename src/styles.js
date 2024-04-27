import styled from "styled-components";
import background from "./assets/bg image copy.svg";

export const Conteiner = styled.div`
  background: url("${background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
 
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
  padding: 50px 36px;
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: aliceblue;
  margin-bottom: 80px;
`;
export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: aliceblue;
  margin-left: 24px;
`;
export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  width: 342px;
  height: 48px;
  outline: none;
  padding-left: 26px;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 28px;
  margin-bottom: 25px;

  color: aliceblue;
`;
export const Button = styled.button`
  width: 342px;
  height: 74px;
  background: rgba(0, 0, 0, 0.9);
  border: none;
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
