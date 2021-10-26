import React, {useState} from 'react'
import Axios from 'axios'

function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    Axios.defaults.withCredentials = true
    
    const Login = () =>{
      Axios.post("http://localhost:3001/login",{
        email: email,
        senha: senha
      }).then((response) => {
        console.log(response)
      })
    }
    return (
    <div className="login">
      <h1>Login</h1>
      <label>Email</label>
      <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
      
      <label>Senha</label>
      <input type="password" onChange={(e)=>{setSenha(e.target.value)}}/>
      
      <button onClick={Login}>logar</button>
    </div>
  )
}

export default Login