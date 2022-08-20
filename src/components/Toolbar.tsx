import React, {useState} from 'react';
import {
  StyledToolbarContainer as ToolbarContainer,
  StyledSearchForm as SearchForm,
  StyledSearchFormControl as SearchFormControl,
  StyledSearchButton as SearchButton,
  StyledButton as Button
} from './Toolbar.style';
import ContactModal from "./ContactModal";

const Toolbar = (props: {onAddContact: (surname: string, name: string) => void}) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <ToolbarContainer>
        <Button onClick={() => setVisible(true)}>Add contact</Button>
        <SearchForm>
          <SearchFormControl type="search" placeholder="Search" />
          <SearchButton>Search</SearchButton>
        </SearchForm>
      </ToolbarContainer>
      <ContactModal isVisible={isVisible} setVisible={setVisible} title="Add contact" submitButtonTitle="Add" onSubmit={props.onAddContact}/>
    </>
  );
};

export default Toolbar;