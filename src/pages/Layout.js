import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar">
      <div class="menu">
      <a href="/">Home</a>
      <a href="/TipoEquipo">Tipo Equipo</a>
      <a href="/EstadoEquipo">Estado Equipo</a>
      <a href="/inventario">Inventario</a>
      <a href="/usuario">Usuario</a>
    </div>
      
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;