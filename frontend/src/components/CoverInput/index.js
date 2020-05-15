import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { imageCoverRequest } from '../../store/modules/user/actions';

import imgCover from '../../assets/placeholder.png'

import { Container } from './styles';

export default function CoverInput({profile}) {

  const { fileCover } = profile;
  const dispatch = useDispatch();

  console.log(profile);

  const [preview, setPreview] = useState(fileCover && fileCover);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    dispatch(imageCoverRequest(data));

  }

  return (
    <Container>
      <label htmlFor="cover">
        <img src={preview ? preview : imgCover} alt=""/>
        <input
          type="file"
          id="cover"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
