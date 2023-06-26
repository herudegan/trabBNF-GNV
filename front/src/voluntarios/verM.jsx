import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import '../css/voluntarios.css'
import { id } from './loginV'

export default function Login() {
  const navigate = useNavigate()
  const [mensagens, setMensagens] = useState([])

  const getAllMensagens = async () => {
    const response = await axios.get("http://127.0.0.1:8000/mensagens/Mensagem")
    const data = await response
    setMensagens(data.data)
  }

  useEffect(() => {
    getAllMensagens()
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
        {mensagens.map((mensagens) => {
          let ide = mensagens.ong
          if(ide == id){
            return(
              <div key={mensagens.id} style={{width: '30%'}}>
                  <div className='evento'>
                      <h3 style={{paddingTop: '5%'}}>AVISO</h3>
                      <div className='align'>
                          <p className='left'><font className='bold'>{mensagens.mensagem}</font></p>
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
