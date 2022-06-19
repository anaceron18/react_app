
import React from 'react';
import axios from 'axios';


export default class getEstadoEquipo extends React.Component {
  state = {
    EstadoEquipo: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/estado-equipo`)
      .then(res => {
        console.log(res);
        const EstadoEquipo = res.data;
        this.setState({ EstadoEquipo });
      })
  }

  render() {
    return (
      <>
      <h1>LISTAR ESTADO EQUIPO</h1>
      <table class="tablas">
          <tr>
            <td class="tituloTabla">Nombre</td>
            <td class="tituloTabla">Estado</td>
            <td class="tituloTabla">FechaCreacion</td>
            <td class="tituloTabla">FechaActualizacion</td>
          </tr>
          <tr>
            <td>{this.state.EstadoEquipo.map(EstadoEquipo => <p>{EstadoEquipo.nombre}</p>)}</td>
            <td>{this.state.EstadoEquipo.map(EstadoEquipo => <p>{EstadoEquipo.estado}</p>)}</td>
            <td>{this.state.EstadoEquipo.map(EstadoEquipo => <p>{EstadoEquipo.fechaCreacion  }</p>)}</td>
            <td>{this.state.EstadoEquipo.map(EstadoEquipo => <p>{EstadoEquipo.fechaActualizacion}</p>)}</td>
          </tr> 
        </table>
    
        </> 
    )
  }
}

