import React, { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function PerfilInput({profile}) {

  const { filePerfil } = profile;

  const [preview, setPreview] = useState(filePerfil && filePerfil);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('filesperfil', data);

    const { filePerfil } = response.data;
    setPreview(filePerfil);

  }

  return (
    <Container>
      <label htmlFor="perfil">
        <img src={preview} alt=""/>
        <input
          type="file"
          id="perfil"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
