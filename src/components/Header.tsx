import React from 'react';
import {
  StyledHeaderContainer as HeaderContainer,
  StyledTitle as Title,
  StyledButton as Button
} from './Header.style';

const Header = () => {
  return (
    <nav>
      <HeaderContainer>
        <Title>Contacts list</Title>
        <Button>
          Log Out
        </Button>
      </HeaderContainer>
    </nav>
  );
};

export default Header;