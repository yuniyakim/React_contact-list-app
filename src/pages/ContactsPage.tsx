import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Contacts from "../components/Contacts";
import {useAppActions, useAppSelector} from "../hooks";

const ContactsPage = () => {
  const {contacts, filteredContacts, contactsLoading, contactsError} = useAppSelector(state => state.contact);
  const {userId, token, authLoading, authError} = useAppSelector(state => state.auth);
  const {fetchContacts, addContact, editContact, deleteContact, searchContact, clearContacts, logout} = useAppActions();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    searchContact(searchValue);
  }, [contacts]);

  useEffect(() => {
    fetchContacts(userId, token);
  }, []);

  const handleLogout = () => {
    logout();
    clearContacts();
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
      <Header pageTitle="Contacts list" onLogout={handleLogout} loading={authLoading}
              error={contactsError !== null ? contactsError : authError !== null ? authError : null} />
      <Toolbar onAddContact={handleAddContact} onSearch={handleSearch} loading={contactsLoading} />
      <Contacts contacts={filteredContacts} onEditContact={handleEditContact} onDeleteContact={handleDeleteContact} loading={contactsLoading} />
    </div>
  );
};

export default ContactsPage;