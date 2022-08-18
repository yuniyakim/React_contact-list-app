import React, {useEffect} from 'react';
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Contacts from "../components/Contacts";
import {useAppActions, useAppSelector} from "../hooks";

const ContactsPage = () => {
  const {contacts, error, loading} = useAppSelector(state => state.contact);
  const {userId, token} = useAppSelector(state => state.auth);
  const {fetchContacts} = useAppActions();

  useEffect(() => {
    fetchContacts(userId, token);
  }, []);

  return (
    <div>
      <Header />
      <Toolbar />
      <Contacts contacts={contacts} />
    </div>
  );
};

export default ContactsPage;