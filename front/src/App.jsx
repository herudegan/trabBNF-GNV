import { useState, Fragment } from 'react'
import { Outlet, Link } from "react-router-dom"
import './css/App.css'

function App() {
  return (
    <>
      <div className='header'>
        <img src='./images/gnvlogo.png' className='logo'/>
        <font className='titulo'>GNV</font>
      </div>
      <div style={{marginTop: '13%'}}>
        <Link to="/loginO">
            <button className='buttonHidden'> ONGS </button>
        </Link><br/>
        <Link to="/loginV">
            <button className='buttonHidden'> Voluntários </button>
        </Link>
        <Outlet/>
      </div>
    </>
  )
}

export default App
