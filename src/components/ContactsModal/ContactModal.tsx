import React, {useEffect, useState} from 'react';
import {
  StyledModal as Modal,
  StyledModalHeader as ModalHeader,
  StyledModalTitle as ModalTitle,
  StyledModalBody as ModalBody,
  StyledModalFooter as ModalFooter,
  StyledForm as Form,
  StyledFormControl as FormControl,
  StyledButton as Button
} from "./ContactModal.style";
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
      <ModalHeader closeButton>
        <ModalTitle>{props.title}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormControl type="text" id="surname" placeholder="Surname" defaultValue={props.surnameValue ?? ''} onChange={handleTextFieldChange} />
          <FormControl type="text" id="name" placeholder="Name" defaultValue={props.nameValue ?? ''} onChange={handleTextFieldChange} />
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button danger onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>
          {props.loading ? <Spinner animation="border" variant="light" /> : props.submitButtonTitle}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ContactModal;