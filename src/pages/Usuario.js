import React, {Component} from 'react';
import "../styles/_main.scss";


class Usuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NombreUsuario: '',
      ApellidoUsuario: '',
      tokenSymbol: '',
      daoCap: '',
      minEth: '',
      maxEth: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    
    const Nombre = event.target.NombreUsuario.value;
    const Apellido = event.target.ApellidoUsuario.value;
    const tSymbol = event.target.tokenSymbol.value;
    const dCap = event.target.daoCap.value;
    const mnEth = event.target.minEth.value;
    const mxEth = event.target.maxEth.value;
  
    console.log(Nombre, Apellido, tSymbol, dCap, mnEth, mxEth)
    
  }

  render() {
    return (
      <><h1>Usuarios</h1>
        <p>Formulario para agregar usuarios</p>
      
        <form class="formulario" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Nombre" name="NombreUsuario" value={this.state.NombreUsuario} onChange={this.handleInputChange} />
                <input type="text" placeholder="Apellido" name="ApellidoUsuario" value={this.state.ApellidoUsuario} onChange={this.handleInputChange} />
                <input type="text" placeholder="Symbol e.g. ABC" name="tokenSymbol" value={this.state.tokenSymbol} onChange={this.handleInputChange} />
                <input type="number" placeholder="DAO Max Capacity" name="daoCap" value={this.state.daoCap} onChange={this.handleInputChange} />
                <input type="number" placeholder="Minimum Investment Limit (ETH)" name="minEth" value={this.state.minEth} onChange={this.handleInputChange} />
                <input type="number" placeholder="Maximum Investment Limit (ETH)" name="maxEth" value={this.state.maxEth} onChange={this.handleInputChange} />
                
                <button type="submit">SUBMIT</button>
            </form>
        </>
    );
  }
}

export default Usuario;