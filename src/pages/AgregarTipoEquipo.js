
import React from 'react';
import axios from 'axios';

export default class AddTipoEquipo extends React.Component {
 
  handleSubmit = event => {
    event.preventDefault();
   
    axios.post(`http://localhost:4000/tipo-equipo?`, {
      nombre:document.getElementById("nombre").value,
      estado:document.getElementById("estado").value
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
        <h1>AGREGAR TIPO EQUIPO</h1>
        <form class="formulario" onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" id="nombre"  />
          </label>
          <label>
           Estado:
            <input type="text" id="estado"/>
          </label>
          <button type="submit">Agregar Tipo Equipo</button>
          <label id="mensaje"></label>
        </form>
      </div>
    )
  }
}

