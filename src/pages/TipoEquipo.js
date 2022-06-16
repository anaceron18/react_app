
import React from 'react';
import axios from 'axios';

export default class Blogs extends React.Component {
 
  handleSubmit = event => {
    event.preventDefault();
   
    axios.post(`http://localhost:4000/usuario?`, {
      email: document.getElementById("email").value,
      nombre:document.getElementById("nombre").value,
      estado:document.getElementById("estado").value
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" id="nombre"  />
          </label>
          <label>
           Email:
            <input type="text" id="email" />
          </label>
          <label>
           Estado:
            <input type="text" id="estado"/>
          </label>
          <button type="submit">Agregar Usuario</button>
        </form>
      </div>
    )
  }
}

