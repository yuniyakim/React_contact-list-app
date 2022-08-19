import React, {useState} from 'react';
import {
  StyledToolbarContainer as ToolbarContainer,
  StyledSearchForm as SearchForm,
  StyledSearchFormControl as SearchFormControl,
  StyledSearchButton as SearchButton,
  StyledButton as Button,
  StyledModalBody as ModalBody,
  StyledForm as Form,
  StyledFormControl as FormControl
} from './Toolbar.style';
import Modal from 'react-bootstrap/Modal';

const initialState = {
  surname: '',
  name: '',
}

const Toolbar = (props: {onAddContact: (surname: string, name: string) => void}) => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState(initialState);

  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    props.onAddContact(formValues.surname, formValues.name);
    setShow(false);
  }

  const handleClick = () => setShow(true);

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  return (
    <>
      <ToolbarContainer>
        <Button onClick={() => handleClick()}>Add contact</Button>
        <SearchForm>
          <SearchFormControl type="search" placeholder="Search" />
          <SearchButton>Search</SearchButton>
        </SearchForm>
      </ToolbarContainer>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add contact</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form>
            <FormControl type="text" id="surname" placeholder="Surname" onChange={handleTextFieldChange} />
            <FormControl type="text" id="name" placeholder="Name" onChange={handleTextFieldChange} />
          </Form>
        </ModalBody>
        <Modal.Footer>
          <Button danger onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Toolbar;