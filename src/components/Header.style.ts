import styled from 'styled-components';
import * as palette from '../theme/palette';
import {StyledButton as Button} from "../UI/Button.style";

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
  background-color: ${palette.colors.secondary};
  margin: 3%;
  
  :hover {
    background-color: ${palette.colors.secondaryDark};
  }
`