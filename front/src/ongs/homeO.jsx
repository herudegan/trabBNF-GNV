import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import '../css/ongs.css'

export default function Login() {
  const navigate = useNavigate()
  const [ongs, setOngs] = useState([])

  const getAllOngs = async () => {
    const response = await axios.get("http://127.0.0.1:8000/ongs/Ong")
    const data = await response
    setOngs(data.data)
  }

  useEffect(() => {
    getAllOngs()
  }, [])

  return (
    <>
      <div className='header'>
        <img onClick={() => navigate('/homeO')} src='./images/gnvlogo.png' className='logo'/>
        <a onClick={() => navigate('/homeO')} className='titulo'>GNV</a>
        <a onClick={() => navigate('/cadastrarV')} className='iV'>Voluntarios</a>
        <a onClick={() => navigate('/cadastrarH')} className='iE'>Eventos</a>
        <a onClick={() => navigate('/cadastrarM')} className='iM'>Avisos</a>
      </div>
      <div className='deslogar'>
        <Link to={'/'}>
          <font className='txtDeslogar'>Deslogar</font>
        </Link>
      </div>
    </>
  )
}
