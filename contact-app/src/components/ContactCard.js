import React from "react";
import contact from "../images/contact.png";
export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <>
      <div className="flex flex-row rounded-lg">
        <img className="h-20 w-20 rounded-lg" src={contact} />
        <div className="flex flex-row justify-start p-6">
          <div className="flex-1 min-w-0 ">
            <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {name}
            </div>
            <div className="text-sm text-gray-500 truncate dark:text-gray-400">
              {email}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start p-6">
          <button
            onClick={() => {
              props.clickHandler(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
