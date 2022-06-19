
import React from 'react';
import axios from 'axios';

export default class AddInventario extends React.Component {
 

    state = {
        Inventario: []
    }

    handleSubmit = event => {
    event.preventDefault();
   
    axios.post(`http://localhost:4000/inventario?`, {
        serial:document.getElementById("serial").value,
        modelo:document.getElementById("modelo").value,
        descripcion:document.getElementById("descripcion").value,
        foto:document.getElementById("foto").value,
        color:document.getElementById("color").value,
        precio:document.getElementById("precio").value,
        fechaCompra:document.getElementById("fechaCompra").value,
        usuario:document.getElementById("usuario").value,
        marca:document.getElementById("marca").value,
        tipoEquipo:document.getElementById("tipoEquipo").value,
        estadoEquipo:document.getElementById("estadoEquipo").value
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
        <h1>AGREGAR INVENTARIO</h1>
        <form class="formulario" onSubmit={this.handleSubmit}>
          <label>
                Serial:
                <input type="text" id="serial"  />
          </label>
          <label>
                Modelo:
                <input type="text" id="modelo"  />
          </label>
          <label>
                descripcion:
                <input type="text" id="descripcion"  />
          </label>
          <label>
                foto:
                <input type="text" id="foto"  />
          </label>
          <label>
                Color:
                <input type="text" id="color"  />
          </label>
          <label>
                Precio:
                <input type="text" id="precio"  />
          </label>
          <label>
                Fecha Compra:
                <input type="text" id="fechaCompra" ></input>
          </label>
          <label>
                Usuario:
                <input type="text" id="usuario" ></input>
          </label>
          <label>
                Marca:
                <input type="text" id="marca" ></input>
          </label>
          <label>
                Tipo de equipo:
                <input type="text" id="tipoEquipo" ></input>
          </label>
          <label>
                Estado de equipo:
                <input type="text" id="estadoEquipo" ></input>
          </label>
        <button type="submit">Agregar Inventario</button>
        <label id="mensaje"></label>
        </form>

       
      </div>
    )
  }
}

