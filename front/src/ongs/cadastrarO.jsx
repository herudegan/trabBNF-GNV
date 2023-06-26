import { useState, Fragment } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import '../css/ongs.css'

export default function Cadastrar() {
  const navigate = useNavigate()
  const [nome, setNome] = useState([])
  const [cnpj, setCnpj] = useState([])
  const [email, setEmail] = useState([])
  const [telefone, setTelefone] = useState([])
  const [estado, setEstado] = useState([])
  const [cidade, setCidade] = useState([])
  const [endereco, setEndereco] = useState([])
  const [senha, setSenha] = useState([])

  async function Cadastro(e) {
    e.preventDefault()
    const response = await axios.post("http://127.0.0.1:8000/ongs/Ong/",{
      nome: nome,
      cnpj: cnpj,
      email: email,
      telefone: telefone,
      estado: estado,
      cidade: cidade,
      endereco: endereco,
      senha: senha,
    })
    if(response.status === 201){
      navigate('/loginO')
      console.log("Cadastrado")
    }
  }

  return (
    <>
      <div className='header'>
        <img onClick={() => navigate('/homeV')} src='./images/gnvlogo.png' className='logo'/>
        <a onClick={() => navigate('/homeV')} className='titulo'>GNV</a>
      </div>

      <div className='app'>
          <h1>Cadastrar</h1>

          <form onSubmit={Cadastro}>
            <font className='bold'>Nome :</font><br/>
            <input type="text" name="nome" required onChange={(e) => setNome(e.target.value)}/><br/>
            <font className='bold'>Cnpj :</font><br/>
            <input type="text" name="cnpj" required onChange={(e) => setCnpj(e.target.value)}/><br/>
            <font className='bold'>E-mail :</font><br/>
            <input type="text" name="email" required onChange={(e) => setEmail(e.target.value)}/><br/>
            <font className='bold'>Senha :</font><br/>
            <input type="password" name="senha" required onChange={(e) => setSenha(e.target.value)}/><br/>
            <font className='bold'>Telefone :</font><br/>
            <input type="text" name="telefone" required onChange={(e) => setTelefone(e.target.value)}/><br/>
            <font className='bold'>Estado :</font><br/>
            <input type="text" name="estado" required onChange={(e) => setEstado(e.target.value)}/><br/>
            <font className='bold'>Cidade :</font><br/>
            <input type="text" name="cidade" required onChange={(e) => setCidade(e.target.value)}/><br/>
            <font className='bold'>Endereço :</font><br/>
            <input type="text" name="endereco" required onChange={(e) => setEndereco(e.target.value)}/><br/><br/>
            <input className='button' type="submit" value="Cadastrar"/>
            <br/>
          </form>
          <Link to="/homeO">
                <button className='button'>Voltar</button>
          </Link>
      </div>
    </>
  )
}