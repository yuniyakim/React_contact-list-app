import React from 'react';
import {Contact as ContactType} from "../types/contact";
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Contacts from "../components/Contacts";

const contacts: ContactType[] = [
  {
    id: 1,
    surname: 'Ivanov',
    name: 'Ivan'
  },
  {
    id: 2,
    surname: 'Petrov',
    name: 'Petr'
  },
  {
    id: 3,
    surname: 'Sidorov',
    name: 'Sergey'
  },
  {
    id: 4,
    surname: 'Green',
    name: 'John'
  },
]

const ContactsPage = () => {
  return (
    <div>
      <Header />
      <Toolbar />
      <Contacts contacts={contacts} />
    </div>
  );
};

export default ContactsPage;