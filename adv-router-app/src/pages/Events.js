// import { Link } from "react-router-dom";
// const DUMMY_EVENTS = [
//   {
//     id: "e1",
//     title: "Some event 1",
//     description: "event 1",
//   },
//   {
//     id: "e2",
//     title: "Some event 2",
//     description: "event 2",
//   },
// ];

// const EventsPage = () => {
//   return (
//     <>
//       <h1>EventsPage</h1>
//       <ul>
//         {DUMMY_EVENTS.map((eve) => (
//           <li key={eve.id}>
//             <Link to={eve.id}>
//               <p>{eve.title}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default EventsPage;

// import { useEffect, useState } from "react";
// import EventList from "../components/EventsList";

// const EventsPage = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setIsError] = useState();
//   const [fetchedEvents, setFetchedEvents] = useState();
//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
//       const response = await fetch("http://localhost:8080/events");
//       console.log(response);
//       if (!response.ok) {
//         setIsError("Fetching events failed");
//       } else {
//         const resData = await response.json();
//         console.log(resData);
//         setFetchedEvents(resData.events);
//       }
//       setIsLoading(false);
//     }
//     fetchEvents();
//   }, []);

//   return (
//     <>
//       <div style={{ textAlign: "center" }}>
//         {isLoading && <p>Loading......</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && fetchedEvents && <EventList events={fetchedEvents} />}
//     </>
//   );
// };
// export default EventsPage;

import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  // const events = useLoaderData();
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return (
    <>
      <EventsList events={events} />
      {/* <EventsList/> */}
    </>
  );
};
export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  console.log(response);
  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };
    // throw { message: "Could not fetch events" };
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    return json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    // const resData = await response.json();
    // console.log(resData);
    // return resData.events;
    return response;
  }
};
