import React, {useState} from 'react';
import {
  StyledButton as Button,
  StyledForm as Form,
  StyledFormControl as FormControl,
  StyledModalBody as ModalBody
} from "./ContactModal.style";
import Modal from 'react-bootstrap/Modal';

const initialState = {
  surname: '',
  name: '',
}

const ContactModal = (props: {isVisible: boolean, setVisible: (isVisible: boolean) => void, title: string, submitButtonTitle: string,
  onSubmit: (surname: string, name: string) => void}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleClose = () => props.setVisible(false);
  const handleSubmit = () => {
    props.onSubmit(formValues.surname, formValues.name);
    props.setVisible(false);
  }
  
  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  return (
    <Modal show={props.isVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
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
          {props.submitButtonTitle}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;