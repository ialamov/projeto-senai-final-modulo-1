import React from "react";
import Footer from "../components/shared/Footer";
import { useState, useEffect } from "react";
import validation from "../validation/Email";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(true);

  const submitLogin = (event) => {
    event.preventDefault();

    if (email === '' || !validation(email)) {
      return alert( 'E-mail inválido. Por favor digitar novamente.');
    } else if (password !== 'douglas') {
      return alert('Senha inválida');
    }

    history.push('/map');
  }

  useEffect(() => {
    if (email.length === 0 || !validation(email)) {
      setBtn(false);
      } else {
      setBtn(true);
      }
  }, [email])

  useEffect(() => {
    password.length >= 4 && setBtn(false);
  }, [password]) 


  return (
    <div className="container home">
      <form className="container login" onSubmit={ submitLogin }>
          <div className="inputs">
            <label for="login">
              Login
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
              />
              <input
                type="text"
                name="password"
                placeholder="Senha"
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
              />
            </label>
          </div>
          <div className="btnHome">
            <button
              type="submit"
              disabled={ btn }
            >
              Login
            </button>
          </div>
        </form>
      <Footer />
    </div>
  )
}
