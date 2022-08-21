import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Contacts from "../components/Contacts";
import {useAppActions, useAppSelector} from "../hooks";
import {useNavigate} from "react-router-dom";

const ContactsPage = () => {
  const {contacts, filteredContacts, error, loading} = useAppSelector(state => state.contact);
  const {userId, token} = useAppSelector(state => state.auth);
  const {fetchContacts, addContact, editContact, deleteContact, searchContact, logout} = useAppActions();
  let navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    searchContact(searchValue);
  }, [contacts]);

  useEffect(() => {
    fetchContacts(userId, token);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (userId === null || token === null) {
        return navigate('/');
      }
    }
  }, [loading]);

  const handleLogout = () => {
    logout();
  }

  const handleAddContact = (surname: string, name: string) => {
    if (userId !== null) {
      addContact(surname, name, userId, token);
    }
  }

  const handleEditContact = (id: number, surname: string, name: string) => {
    if (userId !== null) {
      editContact(id, surname, name, userId, token);
    }
  }

  const handleDeleteContact = (id: number) => {
    if (userId !== null) {
      deleteContact(id, token);
    }
  }

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
    searchContact(searchValue);
  }

  return (
    <div>
      <Header pageTitle="Contacts list" onLogout={handleLogout} />
      <Toolbar onAddContact={handleAddContact} onSearch={handleSearch} />
      <Contacts contacts={filteredContacts} onEditContact={handleEditContact} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default ContactsPage;