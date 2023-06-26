import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { id } from './loginO'
import '../css/voluntarios.css'

export default function Cadastrar() {
  const navigate = useNavigate()
  const [dia, setDia] = useState([])
  const [hora, setHora] = useState([])
  const [estado, setEstado] = useState([])
  const [cidade, setCidade] = useState([])
  const [endereco, setEndereco] = useState([])
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
    const response = await axios.post("http://localhost:8000/eventos/Evento/",{
      ong: id,
      data: dia,
      hora: hora,
      estado: estado,
      cidade: cidade,
      endereco: endereco,
    })
    if(response.status === 201){
      console.log("Evento Cadastrado")
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
            <font className='bold'>Data :</font><br/>
            <input type="date" name="data" required onChange={(e) => setDia(e.target.value)}/><br/>
            <font className='bold'>Hora :</font><br/>
            <input type="time" name="hora" required onChange={(e) => setHora(e.target.value)}/><br/>
            <font className='bold'>Estado :</font><br/>
            <input type="text" name="estado" required onChange={(e) => setEstado(e.target.value)}/><br/>
            <font className='bold'>Cidade :</font><br/>
            <input type="text" name="cidade" required onChange={(e) => setCidade(e.target.value)}/><br/>
            <font className='bold'>Endereço :</font><br/>
            <input type="text" name="endereco" required onChange={(e) => setEndereco(e.target.value)}/><br/>
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