import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'

import LoginO from './ongs/loginO.jsx'
import CadastrarO from './ongs/cadastrarO.jsx'
import CadastrarV from './ongs/cadastrarV.jsx'
import CadastrarH from './ongs/cadastrarH.jsx'
import CadastrarM from "./ongs/cadastrarM.jsx";
import HomeO from './ongs/homeO.jsx'

import LoginV from './voluntarios/loginV.jsx'
import HomeV from './voluntarios/homeV.jsx'
import VerH from './voluntarios/verH.jsx'
import VerM from './voluntarios/verM.jsx'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/homeO" element={<HomeO/>} />
        <Route path="/homeV" element={<HomeV/>} />
        <Route path="/loginO" element={<LoginO/>} />
        <Route path="/loginV" element={<LoginV/>} />
        <Route path="/cadastrarO" element={<CadastrarO/>} />
        <Route path="/cadastrarV" element={<CadastrarV/>} />
        <Route path="/cadastrarH" element={<CadastrarH/>} />
        <Route path="/cadastrarM" element={<CadastrarM/>} />
        <Route path="/verH" element={<VerH/>} />
        <Route path="/verM" element={<VerM/>} />
      </Routes>
    </BrowserRouter>
  );
}