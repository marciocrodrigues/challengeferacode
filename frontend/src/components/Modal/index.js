import React from 'react';

import { Container } from './styles';

export default function Modal({
  show,
  children
}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <Container>
      <div className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
      </div>
    </Container>
  );
}
