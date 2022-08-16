import React from 'react';
import {
  StyledContactsContainer as ContactsContainer,
  StyledContact as Contact,
  StyledContactButtonsContainer as ContactButtonsContainer,
  StyledContactButton as ContactButton
} from './Contacts.style';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Contact as ContactType} from '../types/contact';

const Contacts = (props: {contacts: ContactType[]}) => {
  return (
    <ContactsContainer>
      {props.contacts.map(contact =>
        <Contact key={contact.id}>
          {contact.surname} {contact.name}
          <ContactButtonsContainer>
            <ContactButton><i className="bi bi-pencil"></i></ContactButton>
            <ContactButton><i className="bi bi-trash"></i></ContactButton>
          </ContactButtonsContainer>
        </Contact>
      )}
    </ContactsContainer>
  );
};

export default Contacts;
