
import React from 'react';
import axios from 'axios';


export default class getUsers extends React.Component {
  state = {
    Usuario: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/usuario`)
      .then(res => {
        console.log(res);
        const Usuario = res.data;
        this.setState({ Usuario });
      })
  }

  render() {
    return (
      <>
      <h1>LISTAR USUARIOS</h1>
      <table class="tablas">
          <tr>
            <td class="tituloTabla">Nombre</td>
            <td class="tituloTabla">Email</td>
            <td class="tituloTabla">Estado</td>
            <td class="tituloTabla">FechaCreacion</td>
            <td class="tituloTabla">FechaActualizacion</td>
          </tr>
          <tr>
            <td>{this.state.Usuario.map(Usuario => <p>{Usuario.nombre}</p>)}</td>
            <td>{this.state.Usuario.map(Usuario => <p>{Usuario.email}</p>)}</td>
            <td>{this.state.Usuario.map(Usuario => <p>{Usuario.estado}</p>)}</td>
            <td>{this.state.Usuario.map(Usuario => <p>{Usuario.fechaCreacion  }</p>)}</td>
            <td>{this.state.Usuario.map(Usuario => <p>{Usuario.fechaActualizacion}</p>)}</td>
          </tr>
          
        </table>
        
        
        </>


      
    )
  }
}

