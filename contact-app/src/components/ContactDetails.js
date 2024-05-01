import React from "react";
import { Link } from "react-router-dom";
import contactImg from "../images/contact.png";
import { useParams } from "react-router-dom";

export default function ContactDetails({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) return <div>Contact not found</div>;
  return (
    <div className="flex flex-row rounded-lg">
      <img className="h-20 w-20 rounded-lg" src={contactImg} alt="Contact" />
      <div className="flex flex-row justify-start p-6">
        <div className="flex-1 min-w-0 ">
          <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Name: {contact.name}
          </div>
          <div className="text-sm text-gray-500 truncate dark:text-gray-400">
            Email: {contact.email}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start p-6">
        <Link to="/">Go back to contacts</Link>
      </div>
    </div>
  );
}
