import React from "react";
import { Link } from "react-router-dom";
import contactImage from "../images/contact.png";

export default function ContactCard({ contact, removeContact }) {
  const { id, name, email } = contact;

  const handleDelete = () => {
    removeContact(id);
  };

  return (
    <div className="flex flex-row rounded-lg">
      <img className="h-20 w-20 rounded-lg" src={contactImage} alt="Contact" />
      <div className="flex flex-row justify-start p-6">
        <div className="flex-1 min-w-0 ">
          <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
            <Link
              to={{
                pathname: `/contact/${id}`,
                state: { contact },
              }}
            >
              {name}
            </Link>
          </div>
          <div className="text-sm text-gray-500 truncate dark:text-gray-400">
            {email}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start p-6">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
