import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api';

import {
  Container,
  Scroll,
  Content,
  ButtonAlterImage
} from './styles';

import Modal from '../../components/Modal';
import CoverInput from '../../components/CoverInput';

function Dashboard() {
  const profile = useSelector(state => state.user.profile);
  const { fileCover } = profile;
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPosts();

  }, [])

  async function getPosts() {
    const result = await api.get('/posts');
    setPosts(result.data);
  }

  async function handlySubmit(e) {
    e.preventDefault();
    const result = await api.post('/posts',{ post });
    if(result.data.Ok) {
      setPost('');
      await getPosts();
    }
  }

  function handleShowModal() {
    setShowModal(true);
  }

  function handleHideModel() {
    setShowModal(false);
  }

  return (
    <Container cover={fileCover ? fileCover : "https://picsum.photos/id/237/200/300"}>

      <ButtonAlterImage type="button" onClick={handleShowModal}>Alterar Imagem de fundo</ButtonAlterImage>

      <Modal show={showModal}>
          <CoverInput profile={profile}/>
          <button type="button" onClick={handleHideModel}>Fechar</button>
      </Modal>

      <form onSubmit={handlySubmit}>
        <textarea
          cols="30"
          rows="10"
          value={ post }
          onChange={ e => setPost(e.target.value) }
        />
        <button type="submit">Postar</button>
      </form>

      <Content visible={posts.length > 0 && !showModal}>
        <Scroll>
          { posts.map((post) => {
            return (
              <ul key={post.id}>
                <li> Post: { post.post } </li>
                <li> Postado por: { post.name } </li>
              </ul>
            )
          }) }
        </Scroll>
      </Content>
    </Container>
  );
}

export default Dashboard;
