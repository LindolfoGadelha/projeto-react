
import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom"
import axios  from "axios";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/Arrow.svg";
import Trash from "../../assets/18297 4.svg";
import {
  Conteiner,
  H1,
  Image,
  ConteinerItens,
  
  Button,
  User,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  

 
    
  

  useEffect(() => {
    async function fetchUsers() {
      const {data: newUsers} = await axios.get("http://localhost:3001/users");
    
      setUsers(newUsers);


    }
    fetchUsers() 
    
  },[])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage(){
    history.push('/')
  }

  return (
    <Conteiner>
      <Image alt="logo-imagem" src={Avatar} />
      <ConteinerItens>
        <H1>Usuarios</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        
       

        <Button onClick={goBackPage} >
        <img alt="seta" src={Arrow} />  Voltar 
        </Button>

      </ConteinerItens>
    </Conteiner>
  );
}
export default App;