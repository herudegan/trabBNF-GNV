import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import '../css/ongs.css'
import { id } from './loginV'

export default function Login() {
  const navigate = useNavigate()
  const [eventos, setEventos] = useState([])

  const getAllEventos = async () => {
    const response = await axios.get("http://127.0.0.1:8000/eventos/Evento")
    const data = await response
    setEventos(data.data)
  }

  useEffect(() => {
    getAllEventos()
  }, [])

  return (
    <>
      <div className='header'>
        <img onClick={() => navigate('/homeV')} src='./images/gnvlogo.png' className='logo'/>
        <a onClick={() => navigate('/homeV')} className='titulo'>GNV</a>
        <a onClick={() => navigate('/verH')} className='iE' style={{marginLeft: '57%'}}>Eventos</a>
        <a onClick={() => navigate('/verM')} className='iM'>Avisos</a>
      </div>
      <div className='eventos'>
        {eventos.map((eventos) => {
          let ide = eventos.ong
          if(ide == id){0
            return(
              <div key={eventos.id} style={{width: '30%'}}>
                  <div className='evento'>
                      <div className='align'>
                          <p className='left'><font className='bold'>Data:</font> {eventos.data}</p>
                          <p><font className='bold'>Hora:</font> {eventos.hora}</p>
                          <p><font className='bold'>Estado:</font> {eventos.estado}</p>
                          <p><font className='bold'>Cidade:</font> {eventos.cidade}</p>
                          <p><font className='bold'>Endereco:</font> {eventos.endereco}</p>
                      </div>
                  </div>
              </div>
            );
          }
        })}
      </div>
    </>
  )
}
