import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
