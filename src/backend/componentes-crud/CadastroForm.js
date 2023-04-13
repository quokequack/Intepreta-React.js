import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class CadastroForm extends React.Component {
  state = {
    nome: "",
    senha: "",
    email: "",
    redirectToLogin: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      nome: this.state.nome,
      email: this.state.senha,
      senha: this.state.email,
    };

    axios
      .post(`/usuarios`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({ redirectToLogin: true })
      });


  };

  render() {
    if (this.state.redirectToLogin) {
      return <Link to='/about' />;
    }
    return (
      <div>
        <div className="form">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="nome"
              onChange={this.handleChange}
              value={this.state.nome}
              className="form-control"
            />
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              className="form-control"
            />
            <label htmlFor="name">Senha:</label>
            <input
              type="password"
              name="senha"
              onChange={this.handleChange}
              value={this.state.senha}
              className="form-control"
            />
            <br />
          </form>
          <div className="register">
            <button type="submit" className="btn btn-primary">
              Fazer cadastro!
            </button>
            <p>Já possui uma conta?</p>
            <button id="btn-reg" className="btn btn-primary">
              <Link className="link" to="/login">
                Entre!
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
