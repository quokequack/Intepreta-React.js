import React from "react";
import axios from "axios";

export default class PersonAdd extends React.Component {
  state = {
    nome: "",
    senha: "",
    userID: "",
    email: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      nome: this.state.nome,
      email: this.state.email,
      userID: this.state.userID,
      senha: this.state.senha
    };

    axios
      .post(`https://flaskEdson.matheusgamarra.repl.co/usuarios`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              onChange={this.handleChange}
              value={this.state.nome}
            />
            <br />
          </label>
          <label>
            userID:
            <input
              type="number"
              name="userID"
              onChange={this.handleChange}
              value={this.state.userId}
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              type="password"
              name="senha"
              onChange={this.handleChange}
              value={this.state.senha}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <br />

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
