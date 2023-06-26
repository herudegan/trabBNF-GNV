import { useState, Fragment } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import '../css/voluntarios.css'
export var id

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')

  async function Logar() {
    try {
      const response = await axios.post('http://localhost:8000/loginV/', {
      email,
      cpf,
      })
      const data = await response.data[0]
      if(response.status === 200) {
        console.log("Logado")
        id = data
        console.log(id)
        navigate('/homeV')
      }
    } catch (error) {
      console.error("error: "+error)
    }
  }

  return (
    <>
      <div className='header'>
        <img src='./images/gnvlogo.png' className='logo'/>
        <font className='titulo'>GNV</font>
      </div>
      <div className='volun'><br/><br/>
          <input type="text" placeholder='E-mail' className='input' name="email" onChange={(e) => {setEmail(e.target.value)}}/><br/>
          <input type="password" placeholder='CPF' className='input' name="cpf" onChange={(e) => {setCpf(e.target.value)}}/><br/>
          <button className='button' onClick={Logar}>Logar</button>
          <br/><br/>
          <Link to="/">
              <button className='button'>Voltar</button>
          </Link>
      </div>
    </>
  )
}
