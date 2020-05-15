import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { validateEmail } from '../../utils/validates';
import { signInRequest } from '../../store/modules/auth/actions';
import Input from '../../components/Input';

import logo from '../../assets/logos';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (validateFields()) {
      dispatch(signInRequest(email, password));
    };

  }

  function validateFields() {
    if(!validateEmail(email)) {
      setErrorEmail('Insira um e-mail valido');
        return false;
    } else{
      setErrorEmail('');
    }

    if(!password ||
      password.length < 6) {
        setErrorPassword('Insira uma senha com no mínimo 6 caracteres');
      return false;
    } else {
      setErrorPassword('');
    }

    return true;
  }

  return (
    <>
      <figure>
        <img src={logo.logoSignInUp} alt="Logo"/>
        <legend>Logo</legend>
      </figure>

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={ email }
          onChange={ e => setEmail(e.target.value) }
          error={errorEmail}
        />

        <Input
          type="password"
          placeholder="Sua senha secreta"
          value={ password }
          onChange={ e => setPassword(e.target.value) }
          error={errorPassword}
        />

        <button type="submit">Acessar</button>

        <Link to="/register"> Criar conta gratuita <FiLogIn color="#FFF" size={16} /></Link>
      </form>
    </>
  )
}

export default SignIn;
