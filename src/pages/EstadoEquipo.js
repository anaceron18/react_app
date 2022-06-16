
import React from 'react';
import axios from 'axios';


export default class Blogs extends React.Component {
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
      <ul>
        { this.state.Usuario.map(Usuario => <li>{Usuario.nombre}</li>)}
      </ul>
    )
  }
}

