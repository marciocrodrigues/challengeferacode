import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import { store } from '../store';

export default function RouteWrapper({
  //Desustrurando as propriedades
  component: Component,
  isPrivate = false,
  ...rest
}) {
  //Pegando no store o state do auth pegando a propriedade signed
  const { signed }  = store.getState().auth;

  // Verifica se não está logado e a rota é private, assim redirecionando
  // para a tela inicial
  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if(signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      { ...rest }
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
