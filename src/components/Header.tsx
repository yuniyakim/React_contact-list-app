import React from 'react';
import {
  StyledHeaderContainer as HeaderContainer,
  StyledTitle as Title,
  StyledButton as Button
} from './Header.style';

const Header = (props: {pageTitle: string, onLogout: () => void}) => {
  return (
    <HeaderContainer>
      <Title>{props.pageTitle}</Title>
      <Button onClick={() => props.onLogout()}>
        Log Out
      </Button>
    </HeaderContainer>
  );
};

export default Header;