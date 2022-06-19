import logo from './logo.svg';
import './App.css';
import "./styles/_main.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AgregarUser from "./pages/AgregarUser";
import ListarUsers from "./pages/ListarUsers";
import VerInventario from "./pages/VerInventario";
import Usuario from "./pages/Usuario";
import NoPage from "./pages/NoPage";
import AgregarMarca from "./pages/AgregarMarca";
import ListarMarcas from "./pages/ListarMarcas";
import AgregarTipoEquipo from "./pages/AgregarTipoEquipo";
import ListarTipoEquipo from "./pages/ListarTipoEquipo";
import AgregarEstadoEquipo from "./pages/AgregarEstadoEquipo";
import ListarEstadoEquipo from "./pages/ListarEstadoEquipo";
import AgregarInventario from "./pages/AgregarInventario";


function App() {
  return (

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AgregarUser" element={<AgregarUser />} />
          <Route path="ListarUsers" element={<ListarUsers />} />
          <Route path="AgregarMarca" element={<AgregarMarca />} />
          <Route path="ListarMarcas" element={<ListarMarcas />} />
          <Route path="AgregarTipoEquipo" element={<AgregarTipoEquipo />} />
          <Route path="ListarTipoEquipo" element={<ListarTipoEquipo />} />
          <Route path="AgregarEstadoEquipo" element={<AgregarEstadoEquipo />} />
          <Route path="ListarEstadoEquipo" element={<ListarEstadoEquipo />} />
          <Route path="VerInventario" element={<VerInventario />} />
          <Route path="AgregarInventario" element={<AgregarInventario />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;

