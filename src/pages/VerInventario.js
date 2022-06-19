
import React from 'react';
import axios from 'axios';


export default class getInventario extends React.Component {
  state = {
    Inventario: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/inventario`)
      .then(res => {
        console.log(res);
        const Inventario = res.data;
        this.setState({ Inventario });
      })
  }

  render() {
    return (
      <>
      <h1>LISTAR INVENTARIO</h1>
      <table class="tabla">
          <tr>
            <td class="tituloTabla">Nombre</td>
            <td class="tituloTabla">Estado</td>
            <td class="tituloTabla">descripcion</td>
            <td class="tituloTabla">foto</td>
            <td class="tituloTabla">precio</td>
            <td class="tituloTabla">fechacompra</td>
            <td class="tituloTabla">Usuario</td>
            <td class="tituloTabla">Marca</td>
            <td class="tituloTabla">TipoEquipo</td>
            <td class="tituloTabla">EstadoEquipo</td>
            <td class="tituloTabla">FechaCreacion</td>
            <td class="tituloTabla">FechaActualizacion</td>
          </tr>
          <tr>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.serial}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.modelo}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.descripcion}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.foto}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.precio}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.fechaCompra}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.usuario.nombre}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.marca.nombre}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.tipoEquipo.nombre}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.estadoEquipo.nombre}</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.fechaCreacion  }</p>)}</td>
            <td>{this.state.Inventario.map(Inventario => <p>{Inventario.fechaActualizacion}</p>)}</td>
          </tr> 
        </table>
    
        </> 
    )
  }
}

