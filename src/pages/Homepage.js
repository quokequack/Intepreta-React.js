import { Link } from "react-router-dom";
import "../styles/homepage.css";
import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    document.title = "Interpreta | Welcome"; 
  }, []);
  return (
    <>
      <div className="container">
        <div className="container container2">
          <h1 className="text-center">Bem-vindo ao Interpreta!</h1>
          <h4 className="text-center">
            O melhor site para te ajudar na interpretação de texto!
          </h4>
          <div className="buttons">
            <button className="btn btn-outline-primary">
              <Link className="link" to="/login">
                Login
              </Link>
            </button>
            <br />
            <button className="btn btn-outline-primary">
              <Link className="link" to="/register">
                Cadastro
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
