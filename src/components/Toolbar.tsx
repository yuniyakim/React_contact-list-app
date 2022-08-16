import React from 'react';
import {
  StyledToolbarContainer as ToolbarContainer,
  StyledForm as Form,
  StyledFormControl as FormControl,
  StyledSearchButton as SearchButton,
  StyledButton as Button
} from './Toolbar.style';

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <Button>Add contact</Button>
      <Form>
        <FormControl type="search" placeholder="Search" />
        <SearchButton>Search</SearchButton>
      </Form>
    </ToolbarContainer>
  );
};

export default Toolbar;