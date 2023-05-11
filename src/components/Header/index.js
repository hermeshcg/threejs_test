import React from 'react';

import { Container, ContainerIcons, Logo } from './styles';
import { BsSearch, BsBag } from 'react-icons/bs';

function Header() {
  return (
    <Container>
      <Logo
        src="https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
        alt="logo"
        style={{ marginTop: 32 }}
      />
      <ContainerIcons>
        <BsSearch size={25} />
        <BsBag size={25} />
      </ContainerIcons>
    </Container>
  );
}

export default Header;
