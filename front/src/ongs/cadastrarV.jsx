import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import '../css/voluntarios.css'
import { id } from './loginO'

export default function Cadastrar() {
  const navigate = useNavigate()
  const [nome, setNome] = useState([])
  const [cpf, setCpf] = useState([])
  const [email, setEmail] = useState([])
  const [telefone, setTelefone] = useState([])
  const [estado, setEstado] = useState([])
  const [cidade, setCidade] = useState([])
  const [endereco, setEndereco] = useState([])
  const [senha, setSenha] = useState([])
  const [ongs, setOngs] = useState([])

  const getAllOngs = async () => {
    const response = await axios.get("http://127.0.0.1:8000/ongs/Ong")
    const data = await response
    setOngs(data.data)
  }

  useEffect(() => {
    getAllOngs()
    console.log(id)
  }, [])

  async function Cadastro(e) {
    e.preventDefault()
    const response = await axios.post("http://127.0.0.1:8000/voluntarios/Voluntario/",{
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      estado: estado,
      cidade: cidade,
      endereco: endereco,
      senha: senha,
      ong: id,
    })
    if(response.status === 201){
      navigate('/homeO')
      console.log("Cadastrado")
    }
  }

  return (
    <>
      <div className='header'>
        <img onClick={() => navigate('/homeO')} src='./images/gnvlogo.png' className='logo'/>
        <a onClick={() => navigate('/homeO')} className='titulo'>GNV</a>
        <a onClick={() => navigate('/cadastrarV')} className='iV'>Voluntarios</a>
        <a onClick={() => navigate('/cadastrarH')} className='iE'>Eventos</a>
        <a onClick={() => navigate('/cadastrarM')} className='iM'>Avisos</a>
      </div>

      <div className='app'>
          <h1>Cadastrar</h1>

          <form onSubmit={Cadastro}>
          <font className='bold'>Nome :</font><br/>
            <input type="text" name="nome" required onChange={(e) => setNome(e.target.value)}/><br/>
            <font className='bold'>CPF :</font><br/>
            <input type="text" name="cpf" required onChange={(e) => setCpf(e.target.value)}/><br/>
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