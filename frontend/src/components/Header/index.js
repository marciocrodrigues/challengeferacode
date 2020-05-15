import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos';

import { Container, Content, Profile } from './styles';

export default function Header() {
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
              <strong>Nome</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/51/abott@adorable.png" alt="Logo Perfil" />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
