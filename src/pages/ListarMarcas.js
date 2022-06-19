
import React from 'react';
import axios from 'axios';


export default class getMarcas extends React.Component {
  state = {
    Marca: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/marca`)
      .then(res => {
        console.log(res);
        const Marca = res.data;
        this.setState({ Marca });
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
            <td>{this.state.Marca.map(Marca => <p>{Marca.nombre}</p>)}</td>
            <td>{this.state.Marca.map(Marca => <p>{Marca.estado}</p>)}</td>
          </tr> 
        </table>
    
        </> 
    )
  }
}

