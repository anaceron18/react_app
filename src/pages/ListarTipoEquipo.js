
import React from 'react';
import axios from 'axios';


export default class getTipoEquipo extends React.Component {
  state = {
    TipoEquipo: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/tipo-equipo`)
      .then(res => {
        console.log(res);
        const TipoEquipo = res.data;
        this.setState({ TipoEquipo });
      })
  }

  render() {
    return (
      <>
      <h1>LISTAR MARCAS</h1>
      <table class="tablas">
          <tr>
            <td class="tituloTabla">Nombre</td>
            <td class="tituloTabla">Estado</td>
          </tr>
          <tr>
            <td>{this.state.TipoEquipo.map(TipoEquipo => <p>{TipoEquipo.nombre}</p>)}</td>
            <td>{this.state.TipoEquipo.map(TipoEquipo => <p>{TipoEquipo.estado}</p>)}</td>
          </tr> 
        </table>
    
        </> 
    )
  }
}

