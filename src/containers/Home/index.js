
import React, { useState, useRef,} from "react";
import { useHistory } from "react-router-dom";
import axios  from "axios";
import People from "../../assets/Consulting_Isometric 1.svg";
import Arrow from "../../assets/Arrow.svg";
import H1 from "../../components/Title";
import {
  Conteiner,
  Image,
  ConteinerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
   const { data: newUser } = await axios.post("http://localhost:3001/users", {
     name: inputName.current.value,
     age: inputAge.current.value,
   });

   setUsers([...users, newUser]);
   history.push("/usuarios")

  }  
    

  return (
    <Conteiner>
      <Image alt="logo-imagem" src={People} />
      <ConteinerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button  onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

      
      </ConteinerItens>
    </Conteiner>
  );
}
export default Users;