import logo from './logo.svg';
import './App.css';
import "./styles/_main.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import TipoEquipo from "./pages/TipoEquipo";
import EstadoEquipo from "./pages/EstadoEquipo";
import Inventario from "./pages/inventario";
import Usuario from "./pages/Usuario";
import NoPage from "./pages/NoPage";


function App() {
  return (

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="TipoEquipo" element={<TipoEquipo />} />
          <Route path="EstadoEquipo" element={<EstadoEquipo />} />
          <Route path="Inventario" element={<Inventario />} />
          <Route path="Usuario" element={<Usuario />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;

