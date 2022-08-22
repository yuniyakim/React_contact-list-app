import React, {useEffect, useState} from 'react';
import {
  StyledButton as Button,
  StyledForm as Form,
  StyledFormControl as FormControl,
  StyledModalBody as ModalBody
} from "./ContactModal.style";
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

const initialState = {
  surname: '',
  name: '',
}

const ContactModal = (props: {isVisible: boolean, setVisible: (isVisible: boolean) => void, title: string, submitButtonTitle: string,
    onSubmit: (surname: string, name: string, id?: number) => void, id?: number, surnameValue?: string, nameValue?: string, loading: boolean}) => {
  const [formValues, setFormValues] = useState(initialState);

  useEffect(() => {
    setFormValues((prevState) => {
      return({
        ...prevState,
        name: props.nameValue ?? '',
      })
    });
  }, [props.nameValue]);

  useEffect(() => {
    setFormValues((prevState) => {
      return({
        ...prevState,
        surname: props.surnameValue ?? '',
      })
    });
  }, [props.surnameValue]);

  useEffect(() => {
    if (!props.loading) {
      props.setVisible(false);
    }
  }, [props.loading]);

  const handleClose = () => {
    props.setVisible(false);
    setFormValues(initialState);
  }

  const handleSubmit = () => {
    if (props.id) {
      props.onSubmit(formValues.surname, formValues.name, props.id);
    } else {
      props.onSubmit(formValues.surname, formValues.name);
    }
    setFormValues(initialState);
  }

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value
    });
  }

  return (
    <Modal show={props.isVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <Form>
          <FormControl type="text" id="surname" placeholder="Surname" defaultValue={props.surnameValue ?? ''} onChange={handleTextFieldChange} />
          <FormControl type="text" id="name" placeholder="Name" defaultValue={props.nameValue ?? ''} onChange={handleTextFieldChange} />
        </Form>
      </ModalBody>
      <Modal.Footer>
        <Button danger onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>
          {props.loading ? <Spinner animation="border" variant="light" /> : props.submitButtonTitle}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;