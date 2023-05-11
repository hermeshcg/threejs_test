import React from 'react';

import { Container, ContainerIcons, Logo } from './styles';
import { BsSearch, BsBag } from 'react-icons/bs';

function Header() {
  return (
    <Container>
      <Logo
        src="https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo.png"
        alt="logo"
      />
      <ContainerIcons>
        <BsSearch size={25} />
        <BsBag size={25} />
      </ContainerIcons>
    </Container>
  );
}

export default Header;
