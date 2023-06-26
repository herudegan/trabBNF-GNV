import { useState, Fragment } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import '../css/ongs.css'
export var id

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function Logar() {
    try {
      const response = await axios.post('http://localhost:8000/loginO/', {
      email,
      senha,
      })
      const data = await response.data[0]
      if(response.status === 200) {
        id = data
        navigate('/homeO')
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
          <input type="password" placeholder='Senha' className='input' name="senha" onChange={(e) => {setSenha(e.target.value)}}/><br/>
          <button className='button' onClick={Logar}>Logar</button>
          <br/><br/>
          Ainda não tem uma conta?
          <Link to="/cadastrarO">
              Cadastre-se
          </Link><br/>
          <Link to="/">
              <button className='button'>Voltar</button>
          </Link>
      </div>
    </>
  )
}
