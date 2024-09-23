// Components
import React from 'react';
import styled from 'styled-components';

// Types
import { Links } from './navbar.types';

const NavbarComponentContainer = styled.div`
  background-color: #bf4f74;
`;

const NavbarComponentInnerContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const NavbarComponentListItem = styled.li`
  text-align: center;
`;

const NavbarComponentLink = styled.a`
  text-decoration: none;
`;

const links: Array<Links> = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Security',
    path: '/security'
  }
];

const NavbarComponent: React.FC = () => {
  return (
    <NavbarComponentContainer>
      <NavbarComponentInnerContainer>
        {links.map((link) => (
          <NavbarComponentListItem key={link.id}>
            <NavbarComponentLink href={link.path}>
              {link.title}
            </NavbarComponentLink>
          </NavbarComponentListItem>
        ))}
      </NavbarComponentInnerContainer>
    </NavbarComponentContainer>
  );
};

export default NavbarComponent;
