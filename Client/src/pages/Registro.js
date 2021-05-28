import React, {useState} from 'react'
import '../App.css'
import Axios from 'axios'

function Registro() {
  
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    Axios.defaults.withCredentials = true
    
    const Registrar = () =>{
      Axios.post("http://localhost:3001/registrar",{
        nome: nome,
        email: email,
        senha: senha,
        cargo: 'comum'
      }).then((response) => {
        console.log(response)
      })
    }
    return (
    <div className="registro">
      <label>Nome</label>
      <input type="text" onChange={(e)=>{setNome(e.target.value)}}/>
      
      <label>Email</label>
      <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
      
      <label>Senha</label>
      <input type="password" onChange={(e)=>{setSenha(e.target.value)}}/>
      
      <button onClick={Registrar}>Registrar</button>
    </div>
  )
}

export default Registro