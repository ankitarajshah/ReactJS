import EventForm from "../components/EventForm";
// import { json, redirect } from "react-router-dom";
const NewEventPage = () => {
  return (
    <>
      <h1>NewEventPage</h1>
      <EventForm method="post" />
    </>
  );
};
export default NewEventPage;

// export async function action({ request, params }) {
//   const data = await request.formData();
//   //  const enteredTitle= data.get("title")

//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     deacription: data.get("description"),
//   };

//   const response = await fetch("http://localhost:8080/events", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(eventData),
//   });
//   console.log(response);

//   if (response.status === 422) {
//     return response;
//   }
//   if (!response.ok) {
//     throw json({ message: "Could not save event" }, { status: 500 });
//   } else {
//     return redirect("/events");
//   }
// }
