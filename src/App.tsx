import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import {RequireAuth} from "./components/RequireAuth";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/contacts" element={<RequireAuth><ContactsPage /></RequireAuth>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
