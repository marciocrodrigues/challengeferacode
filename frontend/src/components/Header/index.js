import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos';

import { Container, Content, Profile } from './styles';

export default function Header() {

  const profile = useSelector(state => state.user.profile);

  const { filePerfil, name } = profile;

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo.logoHeader} alt="Logo"/>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={filePerfil ? filePerfil : "https://api.adorable.io/avatars/51/abott@adorable.png"} alt={name} />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
