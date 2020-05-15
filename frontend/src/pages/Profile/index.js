import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import { validateEmail } from '../../utils/validates';

import { updateProfileRequest } from '../../store/modules/user/actions';

import PerfilInput from '../../components/PerfilInput';

import { Container } from './styles';

function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorOldPassword, setErrorOldPassword] = useState('');
  const [errorConfPassword, setErrorConfPassword] = useState('');

  useEffect(() => {
    if(profile.id > 0) {
      setName(profile.name);
      setEmail(profile.email);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if(validateFields()) {

      const data = Object.assign(
        {name, email},
        validateNewPassword() ? { password, oldPassword, confPassword } : {}
      );

      dispatch(updateProfileRequest(data))
    }
  }

  function validateNewPassword() {
    if(password !== '' &&
       oldPassword !== '') {
      return true;
    }
    return false;
  }

  function validateFields() {
    // Verificar uma forma melhor de validar os campos no component input
    if(name === '') {
      setErrorName('Preencha o nome!');
      return false;
    } else {
      setErrorName('');
    }

    if(!validateEmail(email)) {
      setErrorEmail('Preencha o e-mail');
      return false;
    } else {
      setErrorEmail('');
    }

    if(validateNewPassword() &&
       password.length < 6) {
      setErrorPassword('Preencha a nova senha');
      return false;
    } else {
      setErrorPassword('');
    }

    if(validateNewPassword() &&
       oldPassword.length < 6) {
      setErrorOldPassword('Preencha a senha atual');
      return false;
    } else {
      setErrorOldPassword('');
    }

    if( validateNewPassword() &&
        confPassword.length < 6) {
      setErrorConfPassword('Confirme a nova senha');
      return false;
    } else {
      setErrorConfPassword("");
    }

    return true;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>

        <PerfilInput profile={profile}/>

        <Input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={ e => setName(e.target.value) }
            error={errorName}
        />

        <Input
          type="email"
          placeholder="Seu endereço de e-mail"
          value={email}
          onChange={e => setEmail(e.target.value) }
          error={errorEmail}
        />

        <hr />

        <Input
          type="password"
          placeholder="Sua senha antiga"
          value={oldPassword}
          onChange={ e => setOldPassword(e.target.value)}
          error={errorOldPassword}
        />

        <Input
          type="password"
          placeholder="Nova senha"
          value={password}
          onChange={ e => setPassword(e.target.value)}
          error={errorPassword}
        />

        <Input
          type="password"
          placeholder="Confirmação de senha"
          value={confPassword}
          onChange={ e => setConfPassword(e.target.value)}
          error={errorConfPassword}
        />
        <button type="submit">Atualizar perfil</button>
      </form>

      <button type="button">
        Sair sistema
      </button>
    </Container>
  )
}

export default Profile;
