import React, {useEffect} from 'react';
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Contacts from "../components/Contacts";
import {useAppActions, useAppSelector} from "../hooks";
import {useNavigate} from "react-router-dom";

const ContactsPage = () => {
  const {contacts, error, loading} = useAppSelector(state => state.contact);
  const {userId, token} = useAppSelector(state => state.auth);
  const {fetchContacts, addContact, editContact, deleteContact, logout} = useAppActions();
  let navigate = useNavigate();

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
      addContact(surname, name, userId);
    }
  }

  const handleEditContact = (id: number, surname: string, name: string) => {
    if (userId !== null) {
      editContact(id, surname, name);
    }
  }

  const handleDeleteContact = (id: number) => {
    if (userId !== null) {
      deleteContact(id);
    }
  }

  return (
    <div>
      <Header pageTitle="Contacts list" onLogout={handleLogout} />
      <Toolbar onAddContact={handleAddContact} />
      <Contacts contacts={contacts} onEditContact={handleEditContact} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default ContactsPage;