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
        <img onClick={() => navigate('/homeV')} src='./images/gnvlogo.png' className='logo'/>
        <a onClick={() => navigate('/homeV')} className='titulo'>GNV</a>
        <a onClick={() => navigate('/verH')} className='iE' style={{marginLeft: '57%'}}>Eventos</a>
        <a onClick={() => navigate('/verM')} className='iM'>Avisos</a>
      </div>
      <div className='deslogar'>
        <Link to={'/'}>
          <font className='txtDeslogar'>Deslogar</font>
        </Link>
      </div>
    </>
  )
}
