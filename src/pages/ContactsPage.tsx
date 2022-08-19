import React, {useEffect} from 'react';
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Contacts from "../components/Contacts";
import {useAppActions, useAppSelector} from "../hooks";
import {useNavigate} from "react-router-dom";

const ContactsPage = () => {
  const {contacts, error, loading} = useAppSelector(state => state.contact);
  const {userId, token} = useAppSelector(state => state.auth);
  const {fetchContacts, logout} = useAppActions();
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

  return (
    <div>
      <Header pageTitle="Contacts list" onLogout={handleLogout} />
      <Toolbar onAddContact={() => {}} />
      <Contacts contacts={contacts} />
    </div>
  );
};

export default ContactsPage;