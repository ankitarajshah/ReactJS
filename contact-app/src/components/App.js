// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";
import ContactDetails from "./ContactDetails";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Retrieve contacts from local storage
    try {
      const retrieveContacts = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY)
      );
      if (retrieveContacts) setContacts(retrieveContacts);
    } catch (error) {
      console.error("Error retrieving contacts from local storage:", error);
    }
  }, []);

  useEffect(() => {
    // Store contacts in local storage
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    } catch (error) {
      console.error("Error storing contacts in local storage:", error);
    }
  }, [contacts]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  return (
    <>
      <h1 className="text-center text-4xl">Contact Manager</h1>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                removeContact={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/contact/:id"
            element={<ContactDetails contacts={contacts} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
