import styled from 'styled-components';
import * as palette from '../theme/palette';
import Button from 'react-bootstrap/Button';

export const StyledHeaderContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: ${palette.colors.background};
`

export const StyledTitle = styled.div`
  font-size: 24px;
  margin: 3%;
`

export const StyledButton = styled(Button)`
  font-family: 'Open Sans', sans-serif;
  height: 2.5em;
  width: 100px;
  border: solid 1px ${palette.colors.border};
  border-radius: 20px;
  background-color: ${palette.colors.secondary};
  color: ${palette.colors.text};
  margin: 3%;
  cursor: pointer;
  
  :hover {
    background-color: ${palette.colors.secondaryDark};
  }
`