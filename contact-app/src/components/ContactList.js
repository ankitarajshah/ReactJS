import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, removeContact, editContact }) => {
  return (
    <>
      <h2 className="text-center text-xl">Contact List</h2>
      <div className="flex justify-center mb-4">
        <Link to="/add">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Add Contact
          </button>
        </Link>
      </div>
      {contacts.length === 0 ? (
        <div className="text-center text-gray-500">No contacts to display</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              removeContact={removeContact}
              editContact={() => editContact(contact.id)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ContactList;
