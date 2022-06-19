
import React from 'react';
import axios from 'axios';

export default class AddMarca extends React.Component {
 
  handleSubmit = event => {
    event.preventDefault();
   
    axios.post(`http://localhost:4000/marca?`, {
      nombre:document.getElementById("nombreMarca").value,
      estado:document.getElementById("estadoMarca").value
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        document.getElementById("mensaje").textContent="Agregado con Éxito"
      })
  }
  render() {
    return (
      <div>
        <h1>AGREGAR MARCAS</h1>
        <form class="formulario" onSubmit={this.handleSubmit}>
          <label>
                Nombre:
                <input type="text" id="nombreMarca"  />
          </label>
          <label>
                Estado:
                <input type="text" id="estadoMarca"/>
          </label>
        <button type="submit">Agregar Marca</button>
        <label id="mensaje"></label>
        </form>
      </div>
    )
  }
}

