import styled from 'styled-components';
import {StyledButton as Button} from "../UI/Button.style";
import * as palette from '../theme/palette';

export const StyledHeaderContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: ${palette.colors.primary};
`

export const StyledTitle = styled.div`
  font-size: 24px;
  color: ${palette.colors.text};
  margin: 3%;
`

export const StyledButton = styled(Button)`
  margin: 3%;
`