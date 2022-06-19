import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar">
      <div class="menu">
      <a href="/">Home</a>
      <a href="/AgregarUser">Agregar User</a>
      <a href="/ListarUsers">Listar Usuarios</a>
      <a href="/AgregarMarca">Agregar Marca</a>
      <a href="/ListarMarcas">Listar Marca</a>
      <a href="/AgregarTipoEquipo">Agregar Tipo Equipo</a>
      <a href="/ListarTipoEquipo">Listar Tipo Equipo</a>
      <a href="/AgregarEstadoEquipo">Agregar Estado Equipo</a>
      <a href="/ListarEstadoEquipo">Listar Estado Equipo</a>
      <a href="/VerInventario">Ver Inventario</a>
      <a href="/AgregarInventario">Agregar Inventario</a>
      <a href="/usuario">Actualizar Inventario</a>
    </div>
      
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;