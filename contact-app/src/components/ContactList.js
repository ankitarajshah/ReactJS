import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const contacts = [
    {
      id: "1",
      name: "Ankia",
      email: "a@gmail",
    },
  ];
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} />
    );
  });
  return (
    <>
      <h1 className="text-center text-2xl">Contact List</h1>
      <div className="flex justify-center">
        <Link to="/add">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Add Contact
          </button>
        </Link>
      </div>

      <div>{renderContactList}</div>
    </>
  );
};
export default ContactList;
