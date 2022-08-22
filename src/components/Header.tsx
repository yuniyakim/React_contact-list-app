import React, {useEffect, useState} from 'react';
import {
  StyledHeaderContainer as HeaderContainer,
  StyledTitle as Title,
  StyledError as Error,
  StyledErrorHeading as ErrorHeading,
  StyledButton as Button
} from './Header.style';

const Header = (props: {pageTitle: string, onLogout: () => void, error: string | null}) => {
  const [show, setShow] = useState(props.error !== null);

  useEffect(() => {
    if (props.error !== null) {
      setShow(true);
      setTimeout(() =>{
        setShow(false);
      },10000)
    }
  }, [props.error]);

  return (
    <HeaderContainer>
      <Title>{props.pageTitle}</Title>
      <Error show={show} onClose={() => setShow(false)} dismissible><ErrorHeading>Error</ErrorHeading>{props.error}</Error>
      <Button onClick={() => props.onLogout()}>
        Log Out
      </Button>
    </HeaderContainer>
  );
};

export default Header;