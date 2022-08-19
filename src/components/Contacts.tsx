import React from 'react';
import {
  StyledContactsContainer as ContactsContainer,
  StyledContact as Contact,
  StyledContactText as ContactText,
  StyledContactButtonsContainer as ContactButtonsContainer,
  StyledContactEditButton as ContactEditButton,
  StyledContactDeleteButton as ContactDeleteButton
} from './Contacts.style';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Contact as ContactType} from '../types/contact';

const Contacts = (props: {contacts: ContactType[], onEditContact: (id: number, surname: string, name: string) => void,
  onDeleteContact: (id: number) => void}) => {
  const handleEdit = () => {

  }

  const handleDelete = (id: number) => {
    props.onDeleteContact(id);
  }

  return (
    <ContactsContainer>
      {props.contacts.map(contact =>
        <Contact key={contact.id}>
          <ContactText>{contact.surname} {contact.name}</ContactText>
          <ContactButtonsContainer>
            <ContactEditButton warning><i className="bi bi-pencil"></i></ContactEditButton>
            <ContactDeleteButton danger onClick={() => handleDelete(contact.id)}><i className="bi bi-trash"></i></ContactDeleteButton>
          </ContactButtonsContainer>
        </Contact>
      )}
    </ContactsContainer>
  );
};

export default Contacts;
