import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import Swal from "sweetalert2";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    // debugger;
    const enteredTitle = title.current.value;
    const eneteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      eneteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      Swal.fire({
        text: "Oops..Looks like to you forget to enter value",
        icon: "error",
      });

      // modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: eneteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-400mb-4">
          Oops..Looks like to you forget to enter value
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-center gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
