import styled from "styled-components";
import Button from "react-bootstrap/Button";
import * as palette from "../theme/palette";

export const StyledButton = styled(Button)`
  font-family: 'Open Sans', sans-serif;
  height: 3em;
  padding-left: 1em;
  padding-right: 1em;
  border: solid 1px ${palette.colors.border};
  border-radius: 20px;
  background-color: ${palette.colors.primary};
  color: ${palette.colors.text};
  cursor: pointer;
  
  :hover {
    background-color: ${palette.colors.primaryActive};
  }
`