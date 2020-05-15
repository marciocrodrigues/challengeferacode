import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { validateEmail } from '../../utils/validates';
import { signUpRequest } from '../../store/modules/auth/actions';
import Input from '../../components/Input';

import logo from '../../assets/logos';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (validateFields()) {
      dispatch(signUpRequest(name, email, password));
    }
  }

  function validateFields() {

    if (!name) {
      setErrorName('Insira um nome');
      return false;
    } else {
      setErrorName('');
    }

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
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={ e => setName(e.target.value) }
          error={errorName}
        />

        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={ e => setEmail(e.target.value) }
          error={errorEmail}
        />

        <Input
          type="password"
          placeholder="Sua senha secreta"
          value={password}
          onChange={ e => setPassword(e.target.value) }
          error={errorPassword}
        />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho login <FiLogOut color="#FFF" size={16}/></Link>
      </form>
    </>
  )
}

export default SignUp;
