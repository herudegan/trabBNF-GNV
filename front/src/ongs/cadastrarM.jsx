import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { id } from './loginO'
import '../css/voluntarios.css'

export default function Cadastrar() {
  const navigate = useNavigate()
  const [mensagem, setMensagem] = useState([])
  const [voluntarios, setVoluntarios] = useState([])
  const [voluntariosF, setVoluntariosF] = useState([])

  const getAllVoluntarios = async () => {
    const response = await axios.get("http://127.0.0.1:8000/voluntarios/Voluntario")
    const data = await response
    setVoluntarios(data.data)
  }

  useEffect(() => {
    getAllVoluntarios()
  }, [])

  async function Cadastro(e) {
    e.preventDefault()
    const response = await axios.post("http://localhost:8000/mensagens/Mensagem/",{
      ong: id,
      voluntario: voluntariosF,
      mensagem: mensagem,
    })
    if(response.status === 201){
      console.log("Mensagem Cadastrado")
      navigate('/homeO')
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
            <select name='ong' onChange={(e) => setVoluntariosF(e.target.value)}>
                <option value="">Selecione o Voluntário</option>
                {voluntarios.map((x) => {
                    if(id == x.ong){
                        let ide = x.id
                        let nome = x.nome

                        return(
                            <option key={ide} value={ide}>{nome}</option>
                        )
                    }
                })}
            </select><br/><br/>
            <font className='bold'>Mensagem :</font><br/>
            <textarea className='txtA' name="mensagem" required onChange={(e) => setMensagem(e.target.value)}/><br/>
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