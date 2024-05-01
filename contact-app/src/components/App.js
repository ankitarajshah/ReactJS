// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";
import ContactDetails from "./ContactDetails";
import api from "../api/contacts";
import EditContacts from "./EditContacts";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };
  useEffect(() => {
    // Retrieve contacts from local storage
    // try {
    //   const retrieveContacts = JSON.parse(
    //     localStorage.getItem(LOCAL_STORAGE_KEY)
    //   );
    //   if (retrieveContacts) setContacts(retrieveContacts);
    // } catch (error) {
    //   console.error("Error retrieving contacts from local storage:", error);
    // }

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // Store contacts in local storage
    // try {
    //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // } catch (error) {
    //   console.error("Error storing contacts in local storage:", error);
    // }
  }, [contacts]);

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
    console.log(response);
    // setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  const editContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    console.log(response.data);
    const { id, email, name } = response.data;
    setContacts((prevContacts) => {
      return prevContacts.map((contact) => {
        return contact.id === contact.id ? response.data : contact;
      });
    });
    console.log("Contact updated successfully:", response.data);
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
                editContact={editContactHandler}
                removeContact={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit"
            element={
              <EditContacts
                contacts={contacts}
                editContactHandler={editContactHandler}
              />
            }
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
