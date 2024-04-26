import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  // const params = useParams();
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <h1>EventDetailPage</h1>
      {/* <p>Event Id:{params.eventId}</p> */}

      <EventItem event={data.event} />
    </>
  );
};
export default EventDetailPage;

export async function loader({ params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details  from selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details  from selected event" },
      { status: 500 }
    );
  } else {
    return redirect("/events");
  }
}
